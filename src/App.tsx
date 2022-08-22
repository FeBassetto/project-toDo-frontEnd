import React from 'react';
import { Provider } from 'react-redux';
import ProviderTheme from './components/ProviderTheme/ProviderTheme';
import { GlobalStyle } from './config/themes';


import Routing from './routing.routes';

import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProviderTheme>
          <Routing />
          <GlobalStyle />
        </ProviderTheme>
      </Provider>
    </div>
  );
}

export default App;
