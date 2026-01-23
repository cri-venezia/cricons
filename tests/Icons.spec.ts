
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { BloodBagFilled } from 'cricons-lib/components';

describe('Vue Icons', () => {
    it('renders BloodBagFilled icon correctly', () => {
        const wrapper = mount(BloodBagFilled);
        expect(wrapper.find('svg').exists()).toBe(true);
    });
});
