import React, { FC, useContext } from "react";
import { UserModel } from "../types/interface";
import { currentUser } from "../db/users";

interface UserContextType {
	user: UserModel;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("Что-то пошло не так...");
	}
	return context;
};

export const UserProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	const user = currentUser;

	console.log(currentUser);

	return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
