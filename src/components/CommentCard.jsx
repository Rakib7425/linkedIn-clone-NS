// eslint-disable-next-line react/prop-types
const CommentCard = ({ user = "User", message = "hello buddy!!" }) => {
	return (
		<div>
			<p>{user}</p>
			<p>{message}</p>
		</div>
	);
};

export default CommentCard;
