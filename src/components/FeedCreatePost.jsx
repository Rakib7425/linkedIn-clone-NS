import { useDispatch, useSelector } from "react-redux";
import { loginSignupModelOpen, sideModel_open } from "../store/slices/config";
import SideModel_CreatePost from "./SideModel_CreatePost";
import { message } from "antd";

const FeedCreatePost = () => {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user.user);
	const isSideModel_open = useSelector((store) => store.config.isSideModel_open);

	const showDrawer = () => {
		if (user) {
			dispatch(sideModel_open());
		} else {
			message.warning("User Login required For Create a Post ");
			dispatch(loginSignupModelOpen());
		}
	};

	return (
		<div>
			<div className='feed__inputContainer'>
				<div className='feed__input' onClick={showDrawer}>
					<i className='material-icons'> create </i>
					<form onSubmit={(e) => e.preventDefault()}>
						<input type='text' placeholder='Say Something....' />

						<i className='material-icons mr-1 cursor-pointer text-gray-500 hover:text-gray-900'>
							send
						</i>
					</form>
				</div>

				{isSideModel_open && <SideModel_CreatePost />}

				<div className='feed__inputOptions' onClick={showDrawer}>
					<div className='inputOption'>
						<i style={{ color: "#70b5f9" }} className='material-icons'>
							insert_photo
						</i>
						<h4>Photo</h4>
					</div>
					<div className='inputOption'>
						<i style={{ color: "#e7a33e" }} className='material-icons'>
							subscriptions
						</i>
						<h4>Video</h4>
					</div>

					<div className='inputOption'>
						<i style={{ color: "#c0cbcd" }} className='material-icons'>
							event_note
						</i>
						<h4>Event</h4>
					</div>
					<div className='inputOption'>
						<i style={{ color: "#7fc15e" }} className='material-icons '>
							calendar_view_day
						</i>
						<h4>Article</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedCreatePost;
