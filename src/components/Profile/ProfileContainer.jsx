import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from '../../Common/utils/utils'
import {
	getStatus,
	getUserProfile,
	savePhoto,
	updateStatus,
} from '../../redux/profile-reducer'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
	refreshProfile = () => {
		let userId = this.props.router.params.userId
		if (!userId) {
			userId = this.props.authorizedUserId

			if (!userId) {
				this.props.router.navigate('/login')
				return
			}
		}

		this.props.getUserProfile(userId)

		this.props.getStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.router.params.userId !== prevProps.router.params.userId) {
				this.refreshProfile()
		}
	}

	render() {
		return (
			<Profile
				{...this.props}
				isOwner={!this.props.router.params.userId}
				savePhoto={this.props.savePhoto}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
			/>
		)
	}
}

let mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth,
	}
}

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
	withRouter
	// withAuthRedirect
)(ProfileContainer)
