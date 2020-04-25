import * as types from './../constants/ActionType';


export const actSubmit = (number) => {
	return {
		type : types.NUMBER_SELECTED,
		number
	}
}
