import React, { useEffect, useState } from 'react'
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks = props => {
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])



	const activateEditMode = () => {
		setEditMode(true)
	}

	const deActivateEditMode = () => {
		setEditMode(false)
		 props.updateStatus(status)
	}

	const onStatusChange = event => {
		setStatus(event.currentTarget.value)
	}

	return (
		<div>
			{!editMode && (
				<div>
					<b>Status:</b><span onDoubleClick={activateEditMode}>
						{status || "you don't have a status"} 
					</span>
				</div>
			)}
			{editMode && (
				<div>
					<input
						autoFocus={true}
						onBlur={deActivateEditMode}
						onChange={onStatusChange}
						value={status}
					/>
				</div>
			)}
		</div>
	)
}

export default ProfileStatusWithHooks
