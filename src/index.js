import {createStore} from 'redux';
import reducer from './reducer.js';
import * as actions from './actions.js';

const store = (window.devToolsExtension ? window.devToolsExtension(createStore) : createStore)(reducer);

let prevState = store.getState();
console.log('initial state: ', store.getState());
store.subscribe(() => {
  if(prevState !== store.getState()) {
		console.log('state: ',store.getState())
	}
});

store.dispatch(actions.addObject('foo'));
