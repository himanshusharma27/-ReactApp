import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ComponentA from './components/ComponentA';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React App</h1>
        <ComponentA />
      </div>
    </Provider>
  );
}

export default App;

