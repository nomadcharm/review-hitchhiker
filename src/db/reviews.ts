import { CommentModel } from "../types/interface";

export const reviews: CommentModel[] = [
	{
		id: "1",
		createDT: "2025-01-20T12:00:00Z",
		updateDT: "2025-01-20T12:00:00Z",
		user: { username: "Username" },
		userGuid: "abcde-12345-fghij-67890",
		text: "I refuse to answer that question on the grounds that I don't know the answer!",
		isLike: false
	},
	{
		id: "2",
		createDT: "2025-01-27T10:00:00Z",
		updateDT: "2025-01-27T10:00:00Z",
		user: { username: "Username" },
		userGuid: "abcde-12345-fghij-67890",
		text: "I refuse to answer that question on the grounds that I don't know the answer!",
		isLike: false
	},
	{
		id: "3",
		createDT: "2025-01-29T10:00:00Z",
		updateDT: "2025-01-29T10:00:00Z",
		user: { username: "Username" },
		userGuid: "abcde-12345-fghij-67890",
		text: `For instance, on the planet Earth, man had always assumed that 
      he was more intelligent than dolphins because he had achieved so much—the wheel, 
      New York, wars and so on—whilst all the dolphins had ever done was muck about in 
      the water having a good time. But conversely, the dolphins had always believed 
      that they were far more intelligent than man—for precisely the same reasons.`,
		isLike: false
	},
  {
		id: "4",
		createDT: "2025-01-30T10:00:00Z",
		updateDT: "2025-01-30T10:00:00Z",
		user: { username: "Username" },
		userGuid: "abcde-12345-fghij-67890",
		text: `For instance, on the planet Earth, man had always assumed that 
      he was more intelligent than dolphins because he had achieved so much—the wheel, 
      New York, wars and so on—whilst all the dolphins had ever done was muck about in 
      the water having a good time. But conversely, the dolphins had always believed 
      that they were far more intelligent than man—for precisely the same reasons.`,
		isLike: false
	}
];
