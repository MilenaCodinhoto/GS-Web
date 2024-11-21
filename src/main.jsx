import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './routes/Home.jsx'
import ListaFontes from './routes/ListaFontes.jsx'
import Comparacao from './routes/Comparacao.jsx'
import Error from './routes/Error.jsx'
import GlobalStyle from './css/GlobalStyle.jsx';

const router = createBrowserRouter([
  {
    // Elemento Pai (Caminho principal)
    path: '/', element: <App />,
    errorElement: <Error />,
    // Elementos Filhos (Rotas internas do App)
    children: [
      { path: '/', element: <Home /> },
      { path: '/listafontes', element: <ListaFontes /> },
      { path: '/comparacao', element: <Comparacao /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Importando o GlobalStyle para aplicar os estilos globais */}
    <GlobalStyle />
    {/* Renderizando o RouterProvider com a configuração das rotas */}
    <RouterProvider router={router} />
  </StrictMode>
);
