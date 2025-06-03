import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	}

	activateEditMode = () => {
		this.setState({ editMode: true })
	}
	deActivateEditMode = () => {
		this.setState({ editMode: false })
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = event => {
		this.setState({
			status: event.currentTarget.value,
		})
	}

	componentDidUpdate(prevProps, prevState) {
		
		if (prevProps.status !== this.props.status) {
			this.setState({ ststus: this.props.status })
		}

	}

	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick={this.activateEditMode}>
							{this.props.status || "you don't have a status"}
						</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input
							onChange={this.onStatusChange}
							autoFocus={true}
							onBlur={this.deActivateEditMode}
							value={this.state.status}
						/>
					</div>
				)}
			</div>
		)
	}
}

export default ProfileStatus
