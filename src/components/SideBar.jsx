import { useSelector } from "react-redux";

const SideBar = () => {
	const user = useSelector((store) => store?.user?.user?.data);
	// console.log(user);
	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080'
					alt='backdrop_logo'
				/>
				<i className='material-icons sidebar__topAvatar'> account_circle </i>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				{user ? <h2>{user?.name}</h2> : <h2>User's Name</h2>}
				{user ? <h4>{user?.email}</h4> : <h4>yourMail@gmail.com</h4>}
			</div>

			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who Viewed You</p>
					<p className='sidebar__statNumber'>2,453</p>
				</div>
				<div className='sidebar__stat'>
					<p>Views on post</p>
					<p className='sidebar__statNumber'>2,650</p>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>reactjs</p>
				</div>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>programming</p>
				</div>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>softwareengineering</p>
				</div>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>design</p>
				</div>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>developer</p>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
