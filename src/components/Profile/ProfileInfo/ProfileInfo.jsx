import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx'
import userPhoto from '../../../assets/img/UserPhoto.jpg'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = e => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
				{isOwner && <input type='file' onChange={onMainPhotoSelected} />}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
			</div>
		</div>
	)
}

export default ProfileInfo
