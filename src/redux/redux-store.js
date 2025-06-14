import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { thunk as thunkMiddleware } from 'redux-thunk'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import AuthReducer from './auth-reducer'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: AuthReducer,
	form: formReducer,
	app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)

window.__store__ = store

export default store
