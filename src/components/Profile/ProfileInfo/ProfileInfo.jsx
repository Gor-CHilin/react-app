import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx'
import userPhoto from '../../../assets/img/UserPhoto.jpg'
// import ProfileDataForm from './ProfileDataForm.jsx'
import ProfileDataFormReduxForm from './ProfileDataForm.jsx'
import { SubmissionError } from 'redux-form'

const ProfileInfo = ({
	profile,
	status,
	updateStatus,
	isOwner,
	savePhoto,
	saveProfile,
}) => {

	let [editMode, setEditMode] = useState(false)

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = e => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	const onSubmit =  formData => {
		 saveProfile(formData)
				.then(() => {
					setEditMode(false)
				})
				.catch(() => {
					setEditMode(true)
				})
	}

	// const onSubmit = formData => {
	// 	return saveProfile(formData).then(response => {
	// 		if (response.resultCode === 0) {
	// 			setEditMode(false)
	// 		} else {
	// 			throw new SubmissionError({ _error: response.messages[0] })
	// 		}
	// 	})
	// }
	


	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
				{isOwner && <input type='file' onChange={onMainPhotoSelected} />}

				{editMode ? (
					<ProfileDataFormReduxForm
						initialValues={profile}
						profile={profile}
						onSubmit={onSubmit}
					/>
				) : (
					<ProfileData
						profile={profile}
						isOwner={isOwner}
						goToEditMode={() => setEditMode(true)}
					/>
				)}

				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
			</div>
		</div>
	)
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div>
			<div>{isOwner && <button onClick={goToEditMode}>Edit mode</button>}</div>
			<div>
				<b>Full Name :</b>
				{profile.fullName}
			</div>

			<div>
				<b>Looking for a job :</b>
				{profile.lookingForAJob ? 'yes' : 'no'}
			</div>
			{profile.lookingForAJob && (
				<div>
					<b>My professional skills :</b>
					{profile.lookingForAJobDescription}
				</div>
			)}
			<div>
				<b>About me :</b>
				{profile.aboutMe}
			</div>

			<div>
				<b>Contacts :</b>
				{Object.keys(profile.contacts).map(key => {
					return (
						<Contacts
							key={key}
							contactTitle={key}
							contactValue={profile.contacts[key]}
						/>
					)
				})}
			</div>
		</div>
	)
}

const Contacts = ({ contactTitle, contactValue }) => {
	return (
		<div className={s.contact}>
			<b>{contactTitle}</b>:{contactValue}
		</div>
	)
}

export default ProfileInfo
