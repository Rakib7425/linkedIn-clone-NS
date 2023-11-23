/* eslint-disable react/prop-types */
const PostCard = ({ post }) => {
	return (
		<div className='post'>
			<div className='post__header'>
				{/* <i className='material-icons sidebar__topAvatar'> */}

				<img
					src={post?.author?.profileImage}
					alt='profileImage'
					className='h-8 w-8 rounded-full'
				/>
				{/* </i> */}
				<div className='post__info'>
					<h2>{post?.author?.name}</h2>
					{/* <p>Job Description</p> */}
					<p>{post?.channel.name}</p>
				</div>
			</div>
			<h3 className='font-semibold'>Post Title: {post?.title}</h3>
			<div className='post__body'>
				<p>{post?.content}</p>
			</div>

			<div className='feed__inputOptions'>
				<div className='inputOption'>
					<i style={{ color: "gray" }} className='material-icons'>
						thumb_up
					</i>
					<h4>Like {post?.likeCount}</h4>
				</div>
				<div className='inputOption'>
					<i style={{ color: "gray" }} className='material-icons'>
						comment
					</i>
					<h4>Comment {post?.commentCount}</h4>
				</div>
				<div className='inputOption'>
					<i style={{ color: "gray" }} className='material-icons'>
						share
					</i>
					<h4>Share</h4>
				</div>
				<div className='inputOption'>
					<i style={{ color: "gray" }} className='material-icons'>
						send
					</i>
					<h4>Send</h4>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
