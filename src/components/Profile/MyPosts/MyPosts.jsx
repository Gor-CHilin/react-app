import React, { Component } from 'react'
import s from './MyPosts.module.css'
import Post from '../Post/Post'
import { Field, reduxForm } from 'redux-form'
import {
	maxLengthCreator,
	minLength2,
	required,
} from '../../../utils/validators/validators'
import { Textarea } from '../../../Common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name='newPostText'
					component={Textarea}
					placeholder='Enter your post'
					validate={[required, maxLength10]}
				/>
			</div>
			<div>
				<button>Add post </button>
			</div>
		</form>
	)
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(
	AddNewPostForm
)

const MyPosts = React.memo(props=> {


	let postsElement = [...props.posts]
	.reverse()
	.map(p => (
		<Post key={p.id} message={p.message} likesCount={p.likesCount} />
	))

	let newPostElement = React.createRef()

	let onAddPost = values => {
		props.addPost(values.newPostText)
	}

	return (
		<div className={s.postsBlock}>
			<h3>My Posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={s.posts}>{postsElement}</div>
		</div>
	)
})

export default MyPosts
