import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './globalStyle.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
);
