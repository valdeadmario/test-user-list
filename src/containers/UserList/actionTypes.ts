import { Thunky } from "../../store/types";
import { UserType } from "../../types/user.type";

export const SET_USERS = "USER_ACTION:SET_USERS";
export const SET_IS_LOADING = "USER_ACTION:SET_IS_LOADING";

type SetUsers = {
  type: typeof SET_USERS;
  payload: UserType[];
};

type SetLoading = {
  type: typeof SET_IS_LOADING;
  payload: boolean;
};

export type UserAction = SetUsers | SetLoading;
export type AsyncUserAction = Thunky<UserAction>;
