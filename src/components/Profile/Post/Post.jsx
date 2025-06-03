import React from 'react'
import s from './Post.module.css'

const Post = (props) => { 

	return (
		<div className={s.item}>
			<img src='https://yt3.googleusercontent.com/qGrcViAdsmfdL8NhR03s6jZVi2AP4A03XeBFShu2M4Jd88k1fNXDnpMEmHU6CvNJuMyA2z1maA0=s900-c-k-c0x00ffffff-no-rj'></img>
			{props.message}
			<div>
				<span>Like</span> {props.likesCount}
			</div>
		</div>
	)
}

export default Post
