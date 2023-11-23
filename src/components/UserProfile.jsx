/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { loginSignupModelClose } from "../store/slices/config";

const UserProfile = () => {
	const [loading] = useState(false);
	const [warning] = useState("");
	const open = useSelector((store) => store.config.isLoginSignupModelOpen);
	const user = useSelector((store) => store.user.user.data);
	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(loginSignupModelClose());
	};

	// console.log(user);
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	const handleLogout = () => {
		dispatch(removeUser());
		dispatch(loginSignupModelClose());
		toast.success(`Successfully logged out!`);
	};

	return (
		<>
			<Modal
				open={open}
				title={"Your Profile"}
				// onOk={handleLoginAndSignupLocal}
				onCancel={handleCancel}
				footer={[
					<Button
						key='link'
						loading={loading}
						className='bg-yellow-300'
						onClick={handleLogout}
					>
						Logout
					</Button>,
					<Button key='submit' type='primary' className='bg-blue-600' loading={loading}>
						Submit
					</Button>,
					<Button key='back' onClick={handleCancel} className=''>
						Close
					</Button>,
				]}
			>
				<Form
					className='pt-10 pb-5'
					onSubmit={(e) => e.preventDefault()}
					name='basic'
					initialValues={{
						remember: true,
					}}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Form.Item label='Name'>
						<h5 className='font-bold'> {user?.name} </h5>
					</Form.Item>
					<Form.Item label='Email'>
						<h5 className='font-bold'> {user?.email} </h5>
					</Form.Item>
					{/* <h3>Change Password</h3> */}
					<Form.Item
						label='Current Password'
						name='current_password'
						// autoComplete='true'
						rules={[
							{
								required: true,
								message: "Please input your Current password!",
							},
						]}
					>
						<Input autoComplete='false' />
					</Form.Item>

					<Form.Item
						label='New Password'
						name='new_password'
						// autoComplete='true'
						rules={[
							{
								required: true,
								message: "Please input your New password!",
							},
						]}
					>
						<Input.Password autoComplete='false' />
					</Form.Item>
				</Form>
				{warning && (
					<p className='text-center text-yellow-500 text-xl font-bold pb-2'>{warning}!</p>
				)}
			</Modal>
		</>
	);
};
export default UserProfile;
