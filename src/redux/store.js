import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'



let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi ,how are you?', likesCount: 12 },
				{ id: 2, message: 'Its my first post', likesCount: 11 },
				{ id: 3, message: 'blabla', likesCount: 3 },
				{ id: 4, message: 'hahha', likesCount: 20 },
			],
			newPostText: 'It-kamasutra.com',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dimich' },
				{ id: 2, name: 'Andrew' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Victor' },
				{ id: 6, name: 'Valera' },
			],
			message: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Yo' },
				{ id: 5, message: 'Yo' },
			],
			newMessageBody: '',
		},
		sidebar: {},
	},
	_collSubscriber() {
		// console.log('State  changed')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._collSubscriber = observer
	},

	dispatch(action) {
		
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._collSubscriber(this._state)
	},
}




export default store

window.store = store




