
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs-extra';
import path from 'path';
import glob from 'fast-glob';
import mime from 'mime-types';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUCKET_NAME = 'cricons-assets';
const ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;

if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
    console.error('❌ Missing R2 credentials in .env file');
    console.error('Please add R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, and R2_SECRET_ACCESS_KEY to .env');
    process.exit(1);
}

const s3Client = new S3Client({
    region: 'auto',
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
    },
});

const DIST_DIR = path.resolve(__dirname, '../dist');
// Also upload flat SVGs from public/icons/svg? 
// Or better: upload the flattened structure we prepared for webfonts?
// Let's upload:
// 1. dist/webfonts -> /webfonts
// 2. public/icons/svg -> /icons (but flattened or structured?)
// Architecture doc said:
// /v1/filled/blood.svg
// So we should upload from public/icons/svg keeping structure.

const SOURCE_DIRS = [
    { src: path.resolve(__dirname, '../dist/webfonts'), prefix: 'webfonts' },
    { src: path.resolve(__dirname, '../public/icons/svg'), prefix: 'icons/v1' }
];

async function uploadFile(filePath: string, key: string) {
    const fileContent = await fs.readFile(filePath);
    const contentType = mime.lookup(filePath) || 'application/octet-stream';

    try {
        await s3Client.send(new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
            Body: fileContent,
            ContentType: contentType,
            // Cache-Control is set by Worker mostly, but we can set it here too as fallback
            CacheControl: 'public, max-age=31536000',
        }));
        console.log(`✅ Uploaded: ${key}`);
    } catch (error) {
        console.error(`❌ Failed to upload ${key}:`, error);
    }
}

async function main() {
    console.log('🚀 Starting upload to R2...');

    for (const group of SOURCE_DIRS) {
        if (!fs.existsSync(group.src)) {
            console.warn(`⚠️ Source directory not found: ${group.src}`);
            continue;
        }

        const files = await glob('**/*.*', { cwd: group.src });
        console.log(`Found ${files.length} files in ${group.prefix}...`);

        // Batch upload to avoid request limits/flooding?
        // S3 client handles connections well, but let's limit concurrency slightly
        const chunks = [];
        const CHUNK_SIZE = 20;

        for (let i = 0; i < files.length; i += CHUNK_SIZE) {
            const chunk = files.slice(i, i + CHUNK_SIZE);
            await Promise.all(chunk.map(file => {
                const filePath = path.join(group.src, file);
                const key = `${group.prefix}/${file}`;
                return uploadFile(filePath, key);
            }));
        }
    }

    console.log('🎉 All uploads complete!');
}

main();
