import { createContext, FC, useContext, useEffect, useState } from "react";
import { CommentModel } from "../types/interface";
import { testReviews } from "./../db/reviews";

interface ReviewsContextType {
	reviews: CommentModel[];
	updateReview: (updatedReview: CommentModel) => void;
	loading: boolean;
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);

export const useReviews = () => {
	const context = useContext(ReviewsContext);
	if (!context) {
		throw new Error("Что-то пошло не так...");
	}
	return context;
};

export const ReviewsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	const [reviews, setReviews] = useState<CommentModel[]>(() => testReviews?.data || []);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const existingData = localStorage.getItem("reviews");
		setTimeout(() => {
			if (!existingData) {
				localStorage.setItem("reviews", JSON.stringify(reviews));
				setReviews(reviews);
			} else {
				const parsedData: CommentModel[] = JSON.parse(existingData);
				setReviews(parsedData);
			}
			setLoading(false);
		}, 2000);
	}, []);

	const updateReview = (updatedReview: CommentModel) => {
		setReviews((prevReviews) => {
			const updatedReviews = prevReviews.map((review) =>
				review.id === updatedReview.id ? updatedReview : review
			);
			localStorage.setItem("reviews", JSON.stringify(updatedReviews));
			return updatedReviews;
		});
	};

	return (
		<ReviewsContext.Provider value={{ reviews, updateReview, loading }}>
			{children}
		</ReviewsContext.Provider>
	);
};
