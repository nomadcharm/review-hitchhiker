import { FC, useState } from "react";
import { CommentModel } from "../../types/interface";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import LikeDislikeButton from "../LikeDislikeButton/LikeDislikeButton";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";

interface ReviewModalProps {
  isOpen: boolean;
  review: CommentModel;
  onClose: () => void;
  onUpdate: (updatedReview: CommentModel) => void;
}

interface CommentFormInputs {
  comment: string;
  image?: File;
}

const ReviewModal: FC<ReviewModalProps> = ({ isOpen, review, onClose, onUpdate }) => {
  if (!isOpen || !review) return null;

  const [likes, setLikes] = useState(review.likes);
  const [dislikes, setDislikes] = useState(review.dislikes);

  const handleLike = () => {
    if (review.isLike) return;

    const updatedReview = {
      ...review,
      likes: likes + 1,
      dislikes:
        review.isLike === false ? dislikes - 1 : review.isLike === null ? dislikes : dislikes,
      isLike: true
    };

    if (review.isLike === false && review.isLike !== null) setDislikes((prev) => prev - 1);
    setLikes((prev) => prev + 1);
    onUpdate(updatedReview);
  };

  const handleDislike = () => {
    if (review.isLike === false) return;

    const updatedReview = {
      ...review,
      dislikes: dislikes + 1,
      likes: review.isLike === true ? likes - 1 : likes,
      isLike: false
    };

    setDislikes((prev) => prev + 1);
    if (review.isLike === true) setLikes((prev) => prev - 1);
    onUpdate(updatedReview);
  };

  const { control, handleSubmit, setValue, reset, watch } = useForm<CommentFormInputs>({
    defaultValues: {
      comment: "",
      image: undefined
    }
  });

  const selectedImage = watch("image");

  // эмуляция загрузки изображения на сервер
  const uploadImage = async (file: File): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeUrl = URL.createObjectURL(file);
        resolve(fakeUrl);
      }, 1000);
    });
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: CommentFormInputs) => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        let imageUrl = null;

        if (data.image) {
          imageUrl = await uploadImage(data.image);
        }

        const newComment = {
          text: data.comment,
          date: new Date().toISOString(),
          image: imageUrl
        };

        const updatedReview = {
          ...review,
          comments: [...(review.comments || []), newComment]
        };

        onUpdate(updatedReview);
        reset();
        setIsLoading(false);
      }, 2000);
    } catch (error: unknown) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center  w-full h-full bg-[var(--clr-periwinkle-o40)] overflow-y-scroll"
      onClick={onClose}
    >
      <div
        className="relative mt-14 mb-14 p-8 pt-6 w-[600px] min-h-[400px] rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton className="!absolute !top-6 !right-6" onClick={onClose}>
          <CloseIcon className="text-[var(--clr-periwinkle)]" />
        </IconButton>
        <div className="mb-5">
          <p className="-ml-8 p-2 pl-6 max-w-[400px] rounded-tr-2xl rounded-br-2xl bg-[var(--clr-periwinkle)]">
            {review.user?.username}
          </p>
          <div className="p-10 pb-2 border-b-4 border-[var(--clr-periwinkle)] rounded-2xl">
            <p className="mb-4 text-lg">{review.text}</p>
            <div className="flex items-center justify-between">
              <span className="italic text-xs">{moment(review.createDT).format("ll")}</span>
              <LikeDislikeButton
                likes={likes}
                dislikes={dislikes}
                onLike={handleLike}
                onDislike={handleDislike}
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-bold">Comments:</h3>
          <ul>
            {review.comments?.map((comment, index) => (
              <li key={index} className="mt-2 p-2 border rounded">
                <p>{comment.text}</p>
                {comment.image && (
                  <img
                    src={
                      comment.image instanceof File
                        ? URL.createObjectURL(comment.image)
                        : comment.image
                    }
                    alt="Comment attachment"
                    className="mt-2 max-w-full h-auto rounded"
                  />
                )}
                <span className="text-xs italic">{moment(comment.date).format("ll")}</span>
              </li>
            ))}
          </ul>
        </div>

        <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="comment"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Поле обязательное для заполнения"
              },
              maxLength: {
                value: 255,
                message: "Поле не должно превышать 255 символов"
              },
              minLength: {
                value: 3,
                message: "Поле должно содержать минимум 3 символа"
              },
              validate: {
                notEmpty: (value) =>
                  (typeof value === "string" && value.trim() !== "") ||
                  "Поле не должно содержать одни пробелы"
              }
            }}
            render={({ field, fieldState }) => (
              <div className="flex flex-col">
                <input
                  {...field}
                  className={`p-5 outline-0 border-2 rounded-2xl ${fieldState.error ? "border-red-500" : "border-[var(--clr-periwinkle)]"
                    }`}
                  type="text"
                  placeholder="Прокомментировать"
                />
                {fieldState.error && (
                  <span className="text-red-500 text-sm mt-1">{fieldState.error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="image"
            control={control}
            render={() => (
              <input
                type="file"
                accept="image/*"
                className="custom-file-input appearance-none w-full h-10 text-transparent cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setValue("image", file);
                }}
              />
            )}
          />
          {selectedImage && (
            <div className="mt-2">
              <p className="text-sm">Selected Image:</p>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="mt-2 max-w-full h-auto rounded"
              />
            </div>
          )}
          <button
            type="submit"
            className="self-end p-4 w-60 h-14 bg-[var(--clr-zircon)] hover:bg-[var(--clr-periwinkle)] text-center
              transition-colors duration-300 cursor-pointer"
          >
            {isLoading ? (
              <span className="btn-custom-loader"></span>
            ) : (
              <span>Оставить комментарий</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
