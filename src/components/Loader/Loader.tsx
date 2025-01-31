import { FC } from "react";

const Loader: FC = () => {
	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="loader" />
		</div>
	);
};

export default Loader;
