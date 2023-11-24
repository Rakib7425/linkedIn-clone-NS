import { RWebShare } from "react-web-share";

// eslint-disable-next-line react/prop-types
const SharePost = ({ text, url }) => {
	return (
		<div>
			<RWebShare
				data={{
					text: text,
					url: url || "https://linkedin-rakib.netlify.app/",
					title: "Share a post",
				}}
				onClick={() => console.log("Share a post!")}
			>
				<button className='flex gap-1 text-[gray] hover:text-gray-700'>
					<i className='material-icons'>share</i>
					<h4>{text}</h4>
				</button>
			</RWebShare>
		</div>
	);
};

export default SharePost;
