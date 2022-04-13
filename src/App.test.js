
import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './components/App';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('renders without crashing', () => {
  const store = mockStore({}); // Instead of {}, you can give your initial store
  shallow(
    <Provider store={store}>   // Provides the store to your App
      <App />
    </Provider>
  );
});
