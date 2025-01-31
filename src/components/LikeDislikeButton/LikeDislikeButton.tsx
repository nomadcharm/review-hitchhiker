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
		<div>
			<IconButton onClick={onLike}>
				<ThumbUpIcon className="text-[var(--clr-caribbean-green)]" />
				<span>{likes}</span>
			</IconButton>
			<IconButton onClick={onDislike}>
				<ThumbDownIcon className="text-[var(--clr-persimmon)]" />
				<span>{dislikes}</span>
			</IconButton>
		</div>
	);
};

export default LikeDislikeButton;
