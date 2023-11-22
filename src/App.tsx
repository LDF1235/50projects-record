import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  const renderRoutes = useRoutes(routes);

  return <>{renderRoutes} </>;
};

export default App;
