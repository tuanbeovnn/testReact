import * as types from '../constants/ActionType';
let defaultState = 6;

const numberSelected = (state = defaultState, action) => {

	switch(action.type){
		case types.NUMBER_SELECTED:

			return action.number
		default:
			return state;
	}
}

export default numberSelected;