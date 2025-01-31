import { IconButton } from "@mui/material";
import { FC } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

interface LikeDislikeProps {
	likes: number;
	dislikes: number;
	onLike: () => void;
	onDislike: () => void;
}

const LikeDislikeButton: FC<LikeDislikeProps> = ({ likes, dislikes, onLike, onDislike }) => {
	return (
		<div className="flex items-center gap-5.5">
			<IconButton className="!w-5 flex items-center gap-1" onClick={onLike}>
				<ThumbUpIcon className="text-[var(--clr-caribbean-green)]" />
				<span className="text-xs">{likes}</span>
			</IconButton>
			<IconButton className="!w-5 flex items-center gap-1" onClick={onDislike}>
				<ThumbDownIcon className="text-[var(--clr-persimmon)]" />
				<span className="text-xs">{dislikes}</span>
			</IconButton>
		</div>
	);
};

export default LikeDislikeButton;
