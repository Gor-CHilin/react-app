import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createField, Input } from '../../Common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { getCaptchaUrl, login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import style from '../../Common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('Email', 'email', [required], Input)}

			{createField('Password', 'password', [required], Input, {
				type: 'password',
			})}
			{createField(
				null,
				'rememberMe',
				[],
				Input,
				{
					type: 'checkbox',
				},
				'Remember me'
			)}

			{captchaUrl && <img src={captchaUrl} />}
			{captchaUrl && createField(
				"Symbols from image",
				'captcha',
				[required],
				Input,
				{}
			)}



			{error && <div className={style.formSummaryError}>{error}</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login',
})(LoginForm)

const Login = ({ login, isAuth, captchaUrl }) => {
	const onSubmit = formData => {
		login(formData.email, formData.password, formData.rememberMe,formData.captcha)
	}
	if (isAuth) {
		return <Navigate to={'/profile'} />
	}

	return (
		<div>
			<h1>LOGIN</h1>
			<LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = state => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
