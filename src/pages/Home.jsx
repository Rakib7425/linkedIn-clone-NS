import Feed from "../components/Feed";
import RightSideBar from "../components/RightSideBar";
import SideBar from "../components/SideBar";

const Home = () => {
	return (
		<div className='body__main mx-auto'>
			<div className='sidebar hidden md:block'>
				<SideBar />
			</div>

			<div className='feed'>
				<Feed />
			</div>

			<div className='widgets hidden md:block'>
				<RightSideBar />
			</div>
		</div>
	);
};

export default Home;
