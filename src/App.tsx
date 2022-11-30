import './App.css';
import { Suspense, lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { NotFoundRoute } from './utilities';
import { Provider } from 'react-redux';
import myStore from './redux/store';
import { AuthGuard } from './guards';
import { PrivateRoutes, PublicRoutes } from './models/routes';

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <NotFoundRoute>
            <Route path={'/'} element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
          </NotFoundRoute>
        </Suspense>
      </Provider>
    </div>
  );
}
export default App;
