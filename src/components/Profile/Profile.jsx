import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = props => {
	
	return (
		<div>
			<ProfileInfo
				isOwner={props.isOwner}
				saveProfile={props.saveProfile}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				savePhoto={props.savePhoto}
			/>

			<MyPostsContainer />
		</div>
	)
}

export default Profile
