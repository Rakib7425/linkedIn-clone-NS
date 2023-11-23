/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { handleLoginAndSignup } from "../utils/handleLoginAndSignup";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { loginSignupModelClose } from "../store/slices/config";

const LoginModal = () => {
	const [loading, setLoading] = useState(false);
	const [isSignUp, setIsSignUp] = useState(false);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [warning, setWarning] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [userData, setUserData] = useState([]);
	const open = useSelector((store) => store.config.isLoginSignupModelOpen);

	const dispatch = useDispatch();

	const handleLoginAndSignupLocal = async () => {
		try {
			const apiResult = await handleLoginAndSignup(
				name,
				email,
				password,
				setLoading,
				isSignUp
			);
			// console.log(apiResult);
			if (apiResult.status === "fail") {
				setWarning(apiResult.message);
			} else if (apiResult.status === "success") {
				dispatch(addUser(apiResult));
				setUserData(apiResult);
				dispatch(loginSignupModelClose());
				toast.success(`Successfully logged in ${apiResult?.data?.name}`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleCancel = () => {
		dispatch(loginSignupModelClose());
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<Modal
				open={open}
				title={isSignUp ? "User Signup" : "User Login"}
				// onOk={handleLoginAndSignupLocal}
				onCancel={handleCancel}
				footer={[
					<Button
						key='link'
						type='primary'
						loading={loading}
						disabled={loading}
						className='bg-blue-700'
						onClick={() => {
							setIsSignUp(!isSignUp);
						}}
					>
						{isSignUp ? "Already have account Login Now" : "New User?" + " Sign up Now"}
					</Button>,
					<Button
						key='submit'
						type='primary'
						disabled={loading}
						className='bg-blue-600'
						loading={loading}
						onClick={handleLoginAndSignupLocal}
					>
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
					{isSignUp && (
						<Form.Item
							className='ml-[5.8%]'
							label='Name'
							autoComplete='true'
							name='name'
							rules={[
								{
									required: true,
									message: "Please input your name!",
								},
							]}
						>
							<Input
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</Form.Item>
					)}

					<Form.Item
						className='ml-[5.8%]'
						label='Email'
						autoComplete='true'
						name='email'
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}
					>
						<Input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Form.Item>

					<Form.Item
						label='Password'
						name='password'
						// autoComplete='true'
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password
							autoComplete='true'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</Form.Item>
				</Form>
				{warning && (
					<p className='text-center text-yellow-500 text-lg font-bold pb-2'>{warning}!</p>
				)}
			</Modal>
		</>
	);
};

export default LoginModal;
