import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "/src/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<Provider store={store}>
		<BrowserRouter>
			<ToastContainer position='top-right' width={"100%"} theme='dark' />
			<App />
		</BrowserRouter>
	</Provider>
	// </React.StrictMode>,
);
