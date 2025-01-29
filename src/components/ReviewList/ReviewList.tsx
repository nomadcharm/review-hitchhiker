import { reviews } from "../../db/reviews";
import { CommentModel } from "../../types/interface";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewList = () => {
	const reviewList: CommentModel[] = reviews;

	return (
		<section className="py-10">
			<div className="mx-auto p-6 w-full max-w-[1360px]">
      <ul className="flex align-middle gap-8">
				{reviewList.map((review) => (
					<li
            className="flex-auto max-w-79.5"
            key={review.id}
          >
						<ReviewCard review={review} />
					</li>
				))}
			</ul>
      </div>
		</section>
	);
};

export default ReviewList;
