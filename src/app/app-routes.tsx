import { redirect } from 'react-router-dom';
import KanbanView from './kanban-view/kanban-view';
import ListView from './list-view/list-view';

export const routes = [
  { index: true, loader: () => redirect('kanban-view') },
  { path: 'kanban-view', element: <KanbanView />, text: 'Kanban View' },
  { path: 'list-view', element: <ListView />, text: 'List View' }
];
