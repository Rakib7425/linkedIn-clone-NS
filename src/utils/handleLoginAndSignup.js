import { loginApi, signUpApi } from "../constent/apis";

const PROJECT_ID = import.meta.env.PROJECT_ID;

export const handleLoginAndSignup = async (name, email, password, setLoading, isSignUp) => {
	if (isSignUp) {
		//Handle Signup
		// console.log(name);
		try {
			setLoading(true);
			const response = await fetch(signUpApi, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					projectID: PROJECT_ID,
				},
				body: JSON.stringify({
					name,
					email,
					password,
					appType: "ott",
				}),
			});
			const result = await response.json();
			// console.log(result);

			setLoading(false);
			return result;
			//
		} catch (error) {
			setLoading(false);
			return error;
		}
	} else {
		// Handle Login

		try {
			setLoading(true);
			const response = await fetch(loginApi, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					projectID: PROJECT_ID,
				},
				body: JSON.stringify({
					email,
					password,
					appType: "ott",
				}),
			});
			const result = await response.json();
			// console.log(result);
			setLoading(false);
			return result;
			//
		} catch (error) {
			setLoading(false);
			return error;
		}
	}
};
