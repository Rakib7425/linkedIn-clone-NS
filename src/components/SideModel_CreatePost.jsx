// import { useState } from "react";
import { Drawer, Upload, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sideModel_close } from "../store/slices/config";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { createPost } from "../utils/createPost";

const SideModel_CreatePost = () => {
	const dispatch = useDispatch();
	const [file, setFile] = useState(null);
	// const [form] = Form.useForm();

	const isSideModel_open = useSelector((store) => store.config.isSideModel_open);
	const userToken = useSelector((store) => store.user.user.token);

	const onClose = () => {
		dispatch(sideModel_close());
	};

	const layout = {
		labelCol: {
			span: 4,
		},
		wrapperCol: {
			span: 16,
		},
	};
	const beforeUpload = (file) => {
		const isImage = file.type.startsWith("image/");
		if (!isImage) {
			message.error("You can only upload image files!");
			return false;
		}
		setFile(file);
		return isImage && false;
	};
	const onFinish = async (post) => {
		// API call for create a post
		const result = await createPost(post, file, userToken);
		if (result) {
			// form.resetFields();
			onClose();
			console.log(result);
		}
	};

	return (
		<>
			<Drawer
				title='Create a Post'
				placement='right'
				width={"40vw"}
				// className='min-w-screen'
				onClose={onClose}
				open={isSideModel_open}
			>
				<Form
					// form={form}
					{...layout}
					name='nest-messages'
					onFinish={onFinish}
					style={{
						maxWidth: 600,
						marginTop: 20,
					}}
				>
					<Form.Item
						name={["post", "title"]}
						label='Post Title'
						rules={[
							{
								required: true,
								message: "Please input the title!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={["post", "content"]}
						label='Content'
						rules={[
							{
								required: true,
								message: "Please input the content!",
							},
						]}
					>
						<Input.TextArea />
					</Form.Item>
					<Form.Item
						name='image'
						label='Post Image'
						valuePropName='fileList'
						getValueFromEvent={(e) => e.fileList}
					>
						<Upload name='avatar' listType='picture' beforeUpload={beforeUpload}>
							<Button className='flex'>
								<i style={{ color: "#70b5f9" }} className='material-icons mr-2'>
									upload
								</i>
								Select Image
							</Button>
						</Upload>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							...layout.wrapperCol,
							offset: 4,
						}}
					>
						<Button
							type='primary'
							htmlType='submit'
							className='bg-blue-600 text-white hover:bg-blue-700 hover:text-white'
						>
							Create Now
						</Button>
					</Form.Item>
				</Form>
			</Drawer>
		</>
	);
};

export default SideModel_CreatePost;
