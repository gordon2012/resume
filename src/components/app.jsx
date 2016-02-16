import React, { Component } from 'react';
import { Provider } from 'react-redux';

// const reducer = combineReducers(reducers);
// const store = createStore(reducer);
// const store = createStore(friendlist);

import DevTools from './devTools';
import Immutable from 'immutable';
const initialState = Immutable.List(['Always Be Coding']);
// export default (state = Immutable.List(['Always Be Coding']), action) => {
import { createStore } from 'redux';
import todos from '../reducers/todos';
const store = createStore(todos, initialState, DevTools.instrument());



import Todos from './todos'
import ResumeApp from './resumeApp.jsx'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Todos />
          <DevTools />
				</div>
			</Provider>
		);
	}
}
