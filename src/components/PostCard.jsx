import { Popover } from "antd";
import { useState } from "react";
import { postCommentHandler } from "../utils/postCommentHandler";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import SharePost from "./SharePost";

/* eslint-disable react/prop-types */
const PostCard = ({ post }) => {
	const [comment, setComment] = useState("");
	const userToken = useSelector((store) => store.user?.user?.token);

	const handlePostComment = async (postId) => {
		/* Responsible for handling the logic to post a comment on a
		specific post. `../utils/postCommentHandler` file and handles the API request to post the comment to the server. */
		if (userToken) {
			const result = await postCommentHandler(postId, comment, userToken);
			console.log(result);
		} else {
			toast.warn(`Login required!`);
		}
	};
	// Same same 👆
	const handleKeyUp = async (e, postId) => {
		if (e.key === "Enter") {
			if (!userToken) {
				toast.warn(`Login required!`);
				return;
			}
			const result = await postCommentHandler(postId, comment, userToken);
			console.log(result);
		}
	};

	return (
		<div className='post'>
			<div className='post__header'>
				{/* <i className='material-icons sidebar__topAvatar' /> */}

				<img
					src={post?.author?.profileImage}
					alt='profileImage'
					className='h-8 w-8 rounded-full'
				/>

				<div className='post__info'>
					<h2>{post?.author?.name}</h2>
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
					title={"Type a comment :"}
					className='flex gap-1 '
					content={
						<div className='min-w-[40vw]'>
							<div className='flex items-center justify-center w-full'>
								<input
									type='text'
									placeholder='Type your comment'
									className='p-2 pr-7 border focus:border-green-700 outline-none rounded-md w-full'
									onChange={(e) => setComment(e.target.value)}
									onKeyUp={(e) => handleKeyUp(e, post?._id)}
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
					<SharePost text={"Share"} url={post?._id} />
				</div>
			</div>
		</div>
	);
};

export default PostCard;
