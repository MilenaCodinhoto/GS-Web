import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './css/GlobalStyle';
import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <GlobalStyle />
      <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
