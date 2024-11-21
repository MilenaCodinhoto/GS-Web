import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './css/GlobalStyle';

function App() {
  
  

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <GlobalStyle />
      
    </>
  );
}

export default App;