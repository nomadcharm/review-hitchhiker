import ForumIcon from "@mui/icons-material/Forum";
import moment from "moment";
import "moment/locale/ru";
import { CommentModel } from "../../types/interface";

interface ReviewCardProps {
	review: CommentModel;
	onclick: (id: string) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onclick }) => {
	moment.locale("ru");
	return (
		<div
			className="relative p-8 pt-16 rounded-2xl bg-white cursor-pointer"
			onClick={() => onclick(review.id)}
		>
			<div className="absolute top-0 left-0 p-3.5 flex items-center justify-between pl-8 w-full rounded-t-2xl bg-[var(--clr-periwinkle)]">
				<h3 className="font-medium">{review.user?.username}</h3>
				<p className="italic text-xs">{moment(review.createDT).format("ll")}</p>
			</div>
			<p className="mb-8 line-clamp-3">{review.text}</p>
			<div className="flex items-center justify-between">
				<p className="flex items-center gap-1.5">
					<ForumIcon className="text-[var(--clr-periwinkle)]" />
					<span className="text-[var(--clr-periwinkle)]">{review.comments?.length}</span>
				</p>
				<p>
					<span className="text-[var(--clr-caribbean-green)]">{review.likes}</span>
					<span> / </span>
					<span className="text-[var(--clr-persimmon)]">{review.dislikes}</span>
				</p>
			</div>
		</div>
	);
};

export default ReviewCard;
