import Header from "./components/Header/Header";
import { ReviewsProvider } from "./context/ReviewsProvider";
import { UserProvider } from "./context/UserProvider";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";

function App() {
	return (
		<UserProvider>
			<ReviewsProvider>
				<Header />
				<ReviewsPage />
			</ReviewsProvider>
		</UserProvider>
	);
}

export default App;
