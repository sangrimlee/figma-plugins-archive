import Form from './pages/Form';
import Layout from './components/Layout';
import Info from './pages/Info';
import { useAppState } from './contexts/AppState';

const App = () => {
  const { isSelectedTextNode } = useAppState();

  return <Layout>{isSelectedTextNode ? <Form /> : <Info />}</Layout>;
};

export default App;
