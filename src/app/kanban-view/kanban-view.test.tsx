import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import KanbanView from './kanban-view';
import 'element-internals-polyfill';

test('renders KanbanView component', () => {
  const wrapper = render(<KanbanView />);
  expect(wrapper).toBeTruthy();
});