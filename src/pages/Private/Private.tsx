import { PrivateRoutes } from '@/models/routes';
import { NotFoundRoute } from '@/utilities';
import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { Chat } from './Dashboard';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

function Private() {
  return (
    <NotFoundRoute>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}>
        <Route path=":contactId" element={<Chat />} />
      </Route>
    </NotFoundRoute>
  );
}
export default Private;
