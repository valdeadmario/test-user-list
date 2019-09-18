import { getPosts } from "../../services/userService";
import { UserType } from "../../types/user.type";

import {
  SET_USERS,
  SET_IS_LOADING,
  UserAction,
  AsyncUserAction
} from "./actionTypes";

const setUsers = (users: UserType[]): UserAction => ({
  type: SET_USERS,
  payload: users
});

const setIsLoading = (isLoading: boolean): UserAction => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

export const loadUsers = (): AsyncUserAction => async (dispatch, getRoot) => {
  try {
    dispatch(setIsLoading(true));

    const users = await getPosts();
    dispatch(setUsers(JSON.parse(atob(users.content)).users));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.log("Bad news...");
  }
};
