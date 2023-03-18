import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/tailwindcss.css';
import 'antd/dist/reset.css';
import { App } from './app';

const root = createRoot(document.getElementById('app')!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
