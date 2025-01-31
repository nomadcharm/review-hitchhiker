import { FC } from "react";
import Loader from "../../components/Loader/Loader";
import ReviewList from "../../components/ReviewList/ReviewList";
import { useReviews } from "../../context/ReviewsProvider";

const ReviewsPage: FC = () => {
	const { loading } = useReviews();

	if (loading) {
		return <Loader />;
	}

	return (
		<section className="py-10">
			<div className="mx-auto p-6 w-full max-w-[1360px]">
				<h2 className="mb-10 text-5xl font-bold">Список отзывов</h2>
				<ReviewList />
			</div>
		</section>
	);
};

export default ReviewsPage;
