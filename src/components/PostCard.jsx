import { Popover } from "antd";
import { useState } from "react";
import { postCommentHandler } from "../utils/postCommentHandler";
import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const PostCard = ({ post }) => {
	const [comment, setComment] = useState("");
	const userToken = useSelector((store) => store.user?.user?.token);

	const handlePostComment = (postId) => {
		// console.log(postId);
		// console.log(comment);
		postCommentHandler(postId, comment, userToken);
	};

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

				<Popover
					placement='bottom'
					title={"Comment"}
					className='flex gap-1 '
					content={
						<div className=''>
							<div className='flex items-center justify-center '>
								<input
									type='text'
									placeholder='Type your comment'
									className='p-2 pr-7 border focus:border-green-700 outline-none rounded-md'
									onChange={(e) => setComment(e.target.value)}
								/>
								<span
									className='text-xl -ml-7 mt-2 cursor-pointer'
									onClick={() => {
										handlePostComment(post?._id);
									}}
								>
									<i className='material-icons text-gray-500 hover:text-gray-900 hover:scale-110 duration-100 hover:-rotate-45'>
										send
									</i>
								</span>
							</div>
						</div>
					}
				>
					<div className='inputOption '>
						<i style={{ color: "gray" }} className='material-icons'>
							comment
						</i>
						<h4>Comment {post?.commentCount}</h4>
					</div>
				</Popover>

				<div className='inputOption'>
					<i style={{ color: "gray" }} className='material-icons'>
						share
					</i>
					<h4>Share</h4>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
