import { Link } from "react-router-dom";
import LoginModal from "./LoginSignupModal";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import { loginSignupModelOpen, setSearchText } from "../store/slices/config";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
	// const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const isLoginModalOpen = useSelector((store) => store.config.isLoginSignupModelOpen);
	const [searchTextLocal, setSearchTextLocal] = useState("");
	const user = useSelector((store) => store.user.user);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSearchText(searchTextLocal));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTextLocal]);

	return (
		<>
			<div className='header sticky w-screen flex items-center justify-center'>
				<div className='header__left'>
					<Link to={"/"}>
						<img
							className='cursor-pointer'
							src='https://aliciavalero.com/wp-content/uploads/2020/11/logo-Linkedin-2048x1152.png'
							alt='Logo'
						/>
					</Link>
					<div className='header__search my-auto'>
						<i className='material-icons -ml-3 mr-2'>search </i>
						<input
							type='text'
							className='text-lg text-black'
							placeholder='React'
							onChange={(e) => setSearchTextLocal(e.target.value)}
						/>
					</div>
				</div>

				<div className='header__right'>
					<div className='headerOption'>
						<i className='material-icons headerOption__icon underline text-black'>
							home
						</i>
						<h3>Home</h3>
					</div>
					<div className='headerOption'>
						<i className='material-icons headerOption__icon'> supervisor_account </i>
						<h3>My Network</h3>
					</div>
					<div className='headerOption'>
						<i className='material-icons headerOption__icon'> business_center </i>
						<h3>Jobs</h3>
					</div>
					<div className='headerOption'>
						<i className='material-icons headerOption__icon'> chat </i>
						<h3>Messaging</h3>
					</div>
					<div className='headerOption'>
						<i className='material-icons headerOption__icon'> notifications </i>
						<h3>Notifications</h3>
					</div>
					<div className='headerOption' onClick={() => dispatch(loginSignupModelOpen())}>
						<i className='material-icons headerOption__icon'> account_circle </i>
						<h3>{user ? user?.data?.name : "Login"}</h3>
					</div>

					{/* Logic user is logged in or not */}
					{isLoginModalOpen && user && <UserProfile />}
					{isLoginModalOpen && !user && <LoginModal />}
				</div>
			</div>
		</>
	);
};

export default Header;
