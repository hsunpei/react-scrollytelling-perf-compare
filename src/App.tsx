import './styles.css';

import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { IndividualListenersAndState } from './pages/IndividualListenersAndState';
import { ReactScrollytellingAndReactSpring } from './pages/ReactScrollytellingAndReactSpring';
import { SingleSectionScrollytelling } from './pages/SingleSectionScrollytelling';

const ROUTES = [
  {
    path: '/individual-listeners-state',
    element: <IndividualListenersAndState />,
    name: 'Individual scroll listeners + state updates',
  },
  {
    path: '/single-section-scrollytelling',
    element: <SingleSectionScrollytelling />,
    name: 'React Scrollytelling (single section)',
  },
  {
    path: '/react-scrollytelling-spring',
    element: <ReactScrollytellingAndReactSpring />,
    name: 'React Scrollytelling + React Spring',
  },
];

export default function App() {
  const location = useLocation();

  return (
    <div className="App min-h-screen bg-gray-100 p-4">
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {location.pathname === '/' && (
        <div className="flex flex-col items-start space-y-4">
          {ROUTES.map((route, index) => (
            <NavLink
              key={index}
              to={route.path}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
