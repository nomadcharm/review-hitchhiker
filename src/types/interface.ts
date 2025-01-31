interface CommentModelDataResult {
	total?: number;
	data?: CommentModel[];
}

interface CommentModel {
	id: string;
	createDT?: string;
	updateDT?: string;
	user?: UserModel;
	userGuid?: string;
	text?: string | null;
	isLike?: boolean | null;
	likes: number;
	dislikes: number;
	comments?: {
		text: string | null;
		image?: string | File | null;
		date: string;
		user: UserModel;
	}[];
}

interface UserModel {
	username: string;
}

export type { CommentModelDataResult, CommentModel, UserModel };
