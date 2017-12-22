export default function posts(state = [], action) {			
	switch(action.type) {
		case 'ADD_POST':		
			let id = state[state.length-1] ? state[state.length-1].id + 1 : 1
			return [...state, {
				'title' : action.post.title,
				'text' : action.post.text,
				'id' : id
			}]
		default:
			return state
	}
}