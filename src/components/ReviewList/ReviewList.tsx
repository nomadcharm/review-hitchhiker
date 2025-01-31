import { useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewModal from "../ReviewModal/ReviewModal";
import { useReviews } from "../../context/ReviewsProvider";

const ReviewList = () => {
	const { reviews, updateReview } = useReviews();
	const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
	const [selectedReviewId, setSelectedReviewId] = useState<string>();

	const handleReviewModalOpen = (id: string) => {
		setSelectedReviewId(id);
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	const selectedReview = reviews.find((review) => review.id === selectedReviewId);

	return (
		<>
			<ul className="flex align-middle gap-8">
				{reviews.map((review) => (
					<li className="flex-auto max-w-79.5" key={review.id}>
						<ReviewCard review={review} onclick={handleReviewModalOpen} />
					</li>
				))}
			</ul>

			{selectedReview && (
				<ReviewModal
					isOpen={isModalOpen}
					review={selectedReview}
					onClose={handleCloseModal}
					onUpdate={updateReview}
				/>
			)}
		</>
	);
};

export default ReviewList;
