import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faEnvelope, faHome, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

library.add(faUserAlt, faHome, faEnvelope, faTimes, faChevronDown, faComment);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/50projects-record'>
    <App />
  </BrowserRouter>,
);
