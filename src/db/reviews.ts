import { CommentModelDataResult } from "../types/interface";

export const testReviews: CommentModelDataResult = {
	total: 4,
	data: [
		{
			id: "1",
			createDT: "2025-01-20T12:00:00Z",
			updateDT: "2025-01-20T12:00:00Z",
			user: { username: "Random" },
			userGuid: "abcde-12345-fghij-67890",
			text: "I refuse to answer that question on the grounds that I don't know the answer!",
			isLike: null,
			likes: 5,
			dislikes: 0,
			comments: []
		},
		{
			id: "2",
			createDT: "2025-01-27T10:00:00Z",
			updateDT: "2025-01-27T10:00:00Z",
			user: { username: "Ford" },
			userGuid: "abcde-12345-fghij-67890",
			text: "I refuse to answer that question on the grounds that I don't know the answer!",
			isLike: true,
			likes: 18,
			dislikes: 0,
			comments: []
		},
		{
			id: "3",
			createDT: "2025-01-29T10:00:00Z",
			updateDT: "2025-01-29T10:00:00Z",
			user: { username: "Douglas Adams" },
			userGuid: "abcde-12345-fghij-67890",
			text: `For instance, on the planet Earth, man had always assumed that 
				he was more intelligent than dolphins because he had achieved so much—the wheel, 
				New York, wars and so on—whilst all the dolphins had ever done was muck about in 
				the water having a good time. But conversely, the dolphins had always believed 
				that they were far more intelligent than man—for precisely the same reasons.`,
			isLike: false,
			likes: 15,
			dislikes: 1,
			comments: [
				{
					text: "Это комментарий",
					image: null,
					date: "2025-01-30T10:00:00Z",
					user: { username: "Random"}
				}
			]
		},
		{
			id: "4",
			createDT: "2025-01-30T10:00:00Z",
			updateDT: "2025-01-30T10:00:00Z",
			user: { username: "Marvin" },
			userGuid: "abcde-12345-fghij-67890",
			text: `For instance, on the planet Earth, man had always assumed that 
				he was more intelligent than dolphins because he had achieved so much—the wheel, 
				New York, wars and so on—whilst all the dolphins had ever done was muck about in 
				the water having a good time. But conversely, the dolphins had always believed 
				that they were far more intelligent than man—for precisely the same reasons.`,
			isLike: true,
			likes: 23,
			dislikes: 1,
			comments: []
		}
	]
};
