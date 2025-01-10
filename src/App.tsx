import './styles.css';

import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { IndividualListenersAndState } from './pages/IndividualListenersAndState';

export default function App() {
  const location = useLocation();

  return (
    <div className="App min-h-screen bg-gray-100 p-4">
      <Routes>
        <Route path="/individual-listeners-state" element={<IndividualListenersAndState />} />
      </Routes>
      {location.pathname === '/' && (
        <NavLink
          to="/individual-listeners-state"
          className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Individual scroll listeners + state updates
        </NavLink>
      )}
    </div>
  );
}
