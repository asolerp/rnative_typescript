import React from 'react';
import {Provider} from 'react-redux';
import {Counter} from '@/Containers';

import store from '@/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
