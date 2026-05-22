import { Link, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import { RoleProvider } from './context/RoleProvider';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <RoleProvider>
      <Link to={'/'}>Home</Link>
      <Link to={'/profile'}>Profile</Link>
      <Link to={'/navbar'}>Navbar</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </RoleProvider>
  );
}

export default App;
