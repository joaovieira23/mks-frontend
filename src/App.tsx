import { MainContent } from "./components/MainContent";
import {Provider} from 'react-redux'

import GlobalStyle from './styles/global';
import store from "./store/store";
import Cart from "./components/Cart";

function App() {
  

  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <MainContent />
      </Provider>
    </div>
  );
}

export default App;
