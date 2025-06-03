import React, { Component, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import UsersContainer from './components/users/usersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/login/login'
import { connect } from 'react-redux'
import { withRouter } from './Common/utils/utils'
import { compose } from 'redux'
import { initializeApp } from './redux/app-reducer'
import Preloader from './Common/Preloader/Preloader'
import { withSuspense } from './hoc/withSuspense'

const DialogsContainer = React.lazy(() =>
	import('./components/Dialogs/DialogsContainer')
)
const ProfileContainer = React.lazy(() =>
	import('./components/Profile/ProfileContainer')
)
const DialogsWithSuspense = withSuspense(DialogsContainer)
const ProfileWithSuspense = withSuspense(ProfileContainer)


class App extends Component {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route
							path='/profile/:userId?'
							element={<ProfileWithSuspense/>}
						/>
						<Route path='/dialogs' element={<DialogsWithSuspense/>} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/login' element={<LoginPage />} />
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	initialized: state.app.initialized,
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App)
