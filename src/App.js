import './App.css';
import { Routes, Route } from 'react-router-dom';
import Room from './pages/room';
import Home from './pages/home';
import JoiningRoom from './pages/joiningroom';

function App() {
  return (
    <Routes>
      <Route path='/room' element={<Home />} />
      <Route path='/joiningroom' element={<JoiningRoom />} />
      <Route index path='/react-videocall' element={<Room />} />
    </Routes>
  );
}

export default App;
