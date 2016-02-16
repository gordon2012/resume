import { createStore } from 'redux';
import Immutable from 'immutable';

import DevTools from './components/devTools';
import todos from './reducers/todos';

// TODO:	Combine reducers
// TODO:	default state inside reducers?
//				ie: createStore(todos, initialState, DevTools.instrument())

export default createStore(todos, Immutable.List(['Always Be Coding']), DevTools.instrument());
