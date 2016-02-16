import React, { Component } from 'react';
import { Provider } from 'react-redux';

// const reducer = combineReducers(reducers);
// const store = createStore(reducer);
// const store = createStore(friendlist);


import { createStore } from 'redux';
import todos from '../reducers/todos';
const store = createStore(todos);


import Todos from './todos'
import ResumeApp from './resumeApp.jsx'

export default class App extends Component {
  render() {
    return (
			<div>
				<Provider store={store}>
						<Todos />
				</Provider>
			</div>
    );
  }
}
