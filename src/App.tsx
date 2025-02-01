import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReviewsProvider } from "./context/ReviewsProvider";
import { UserProvider } from "./context/UserProvider";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import Header from "./components/Header/Header";

function App() {
	return (
		<UserProvider>
			<ReviewsProvider>
				<BrowserRouter basename="/review-hitchhiker">
					<Header />
					<Routes>
						<Route path="/" element={<ReviewsPage />} />
					</Routes>
				</BrowserRouter>
			</ReviewsProvider>
		</UserProvider>
	);
}

export default App;
