import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ThemeProvider from './contexts/theme/ThemeProvider';
import ThemeButton from './components/ThemeButton';

function App() {
  return (
    <ThemeProvider>
      <div className='dark:text-white dark:bg-black h-screen'>
        <Link to={'/'}>Home</Link>
        <ThemeButton />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
