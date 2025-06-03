import React from 'react'
import { Textarea } from '../../../Common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Field, reduxForm } from 'redux-form'


const maxLength50 = maxLengthCreator(50)
const AddMessageForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Textarea}
					validate={[required, maxLength50]}
					name={'newMessageBody'}
					placeholder={'Enter your Message'}
				/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	)
}
 export default reduxForm({form:'dialog-add-message-form'})(AddMessageForm)