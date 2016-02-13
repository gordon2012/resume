import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
// const reducer = combineReducers(reducers);
// const store = createStore(reducer);
// const store = createStore(friendlist);
const store = createStore(function(){return [];});

import ResumeApp from './resumeApp.jsx'

export default class App extends Component {
  render() {
    return (
			<div>
				<Provider store={store}>
						<ResumeApp />
				</Provider>
			</div>
    );
  }
}
