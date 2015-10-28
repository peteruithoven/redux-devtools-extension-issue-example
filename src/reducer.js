import * as actions from './actions.js';
import ComplexObject from './ComplexObject.js';

const initialState = [];

export default function reducer(state = initialState, action) {
	console.log('reducer: action: ', action.type);
	switch(action.type) {
		case actions.ADD_OBJECT:
			const newItem = new ComplexObject(action.title);
			return [
				...state,
				newItem
			]
			break;
		default: 
			return state;
			break;
	}
}
