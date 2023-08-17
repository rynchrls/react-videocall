import './App.css';
import { Routes, Route } from 'react-router-dom';
import Room from './pages/room';
import Home from './pages/home';
import JoiningRoom from './pages/joiningroom';

function App() {
  return (
    <Routes>
      <Route index path='/react-videocall' element={<Home />} />
      <Route path='/joiningroom' element={<JoiningRoom />} />
      <Route path='/room' element={<Room />} />
    </Routes>
  );
}

export default App;
