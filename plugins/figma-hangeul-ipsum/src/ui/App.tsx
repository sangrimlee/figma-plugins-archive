import Layout from './components/Layout';
import { useAppState } from './contexts/AppState';
import Form from './pages/Form';
import Info from './pages/Info';

const App = () => {
  const { isSelectedTextNode } = useAppState();

  return <Layout>{isSelectedTextNode ? <Form /> : <Info />}</Layout>;
};

export default App;
