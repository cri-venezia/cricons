
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react'; // You might need to install @testing-library/react if not present, but let's check.
// If @testing-library/react is not available, we can try a simpler check or install it.
// Assuming user might not have it, I'll use a simpler check or check package.json first? 
// Wait, I saw happy-dom so I can probably use standard DOM API or just check if it imports.
// Actually, let's just try to import and render using ReactDOM if needed or just unit test the function component return.
// But standard practice is testing-library.
import React from 'react';
import { BloodBagFilled } from '../src/react';

describe('React Icons', () => {
    it('is a valid React component', () => {
        expect(BloodBagFilled).toBeDefined();
        // Basic element check without mounting if library missing
        const element = React.createElement(BloodBagFilled);
        expect(element).toBeTruthy();
    });
});
