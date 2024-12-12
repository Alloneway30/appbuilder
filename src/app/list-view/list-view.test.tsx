import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import ListView from './list-view';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders ListView component', () => {
  const wrapper = render(<ListView />);
  expect(wrapper).toBeTruthy();
});