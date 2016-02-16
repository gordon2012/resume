import Immutable from 'immutable';

export default (state = Immutable.List(['Always Be Coding']), action) => {
	switch(action.type) {
		case 'addTodo':
			return state.push(action.todo);
		default:
			return state;
	}
}
