import React from 'react'
import {
	createField,
	Input,
	Textarea,
} from '../../../Common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form'
import s from './ProfileInfo.module.css'
import style from '../../../Common/FormsControls/FormsControls.module.css'
// import { Form } from 'react-router-dom'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button>Save</button>
			</div>
			{error && <div className={style.formSummaryError}>{error}</div>}
			<div>
				<b>Full Name :</b>
				{createField('Full Name', 'fullName', [], Input)}
			</div>

			<div>
				<b>Looking for a job :</b>
				{createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
			</div>

			<div>
				<b>My professional skills :</b>
				{createField(
					'My professional skills',
					'lookingForAJobDescription',
					[],
					Textarea
				)}
			</div>

			<div>
				<b>About me :</b>
				{createField('About me', 'aboutMe', [], Textarea)}
			</div>

			<div>
				<b>Contacts :</b>
				{Object.keys(profile.contacts).map(key => {
					return (
						<div key={key} className={s.contact}>
							<b>
								{key} :{createField(key, `contacts.` + key, [], Input)}
							</b>
						</div>
					)
				})}
			</div>
		</form>
	)
}

const ProfileDataFormReduxForm = reduxForm({
	form: 'profileData',
	destroyOnUnmount: false,
})(ProfileDataForm)

export default ProfileDataFormReduxForm
