// Разработать функциональный реакт-компонент для отображения списка отзывов,
// где каждый отзыв представляет собой сущность из: уникального идентификатора (id),
// имени автора, даты, текста отзыва и количества лайков/дизлайков.

import moment from "moment";
import { CommentModel } from "../../types/interface";

interface ReviewCardProps {
	review: CommentModel;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
	return (
		<div 
			className="relative p-8 pt-16 rounded-2xl bg-white cursor-pointer"
		>
			<div className="absolute top-0 left-0 p-3.5 pl-8 w-full rounded-t-2xl bg-[var(--clr-periwinkle)]">
				<h3 className="font-medium">{review.user?.username}</h3>
			</div>
			<p className="mb-8 line-clamp-3">{review.text}</p>
			<div className="flex align-middle justify-between">
				<p className="italic">{moment(review.createDT).calendar()}</p>
				<p>
					<span className="text-[var(--clr-caribbean-green)]">10</span>
					<span> / </span>
					<span className="text-[var(--clr-persimmon)]">1</span>
				</p>
			</div>
		</div>
	);
};

export default ReviewCard;
