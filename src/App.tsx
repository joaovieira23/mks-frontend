import { Provider } from 'react-redux'

import { MainContent } from "./components/MainContent";

import GlobalStyle from './styles/global';
import store from "./store/store";

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
