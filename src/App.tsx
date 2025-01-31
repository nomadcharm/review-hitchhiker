import { ReviewsProvider } from "./context/ReviewsProvider";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";

function App() {
	return (
		<ReviewsProvider>
			<ReviewsPage />
		</ReviewsProvider>
	);
}

export default App;
