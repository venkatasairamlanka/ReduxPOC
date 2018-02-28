export default function(state = null, action) {
	//state +=1;
	console.log(action.type+" is action.type");
	console.log(" is action");
	console.log(action);
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}