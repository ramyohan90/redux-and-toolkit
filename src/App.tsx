import './App.css';
import { DisplayComponent } from './components/Display';
import { LoginComponent } from './components/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      Hello React App
      <LoginComponent />
      <DisplayComponent />
    </div>
    </Provider>
  );
}

export default App;
