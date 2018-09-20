import React, { Component }  from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';

import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

import logger from 'redux-logger'

class Layout extends Component {
  render(){
    const store = createStore(reducers, composeWithDevTools(
      applyMiddleware(
        ReduxThunk,
        logger
      ),
      // other store enhancers if any
    ));

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
        </View>
      </Provider>
    )
  }
}

export default Layout;
