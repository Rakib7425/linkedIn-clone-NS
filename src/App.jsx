import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import BackToUp from "@uiw/react-back-to-top";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>

			<BackToUp style={{ zIndex: "3" }} size={42}>
				{/* {<BiUpArrowCircle size={32} />} */}
				{/* 👆 */}
				Top
			</BackToUp>
		</>
	);
}

export default App;
