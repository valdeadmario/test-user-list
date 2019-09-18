import { SET_USERS, SET_IS_LOADING, UserAction } from "./actionTypes";
import { UserType } from "../../types/user.type";

type State = {
  items: UserType[];
  isLoading: boolean;
};

const initialState: State = {
  items: [],
  isLoading: true
};

const userReducer = (state = initialState, action: UserAction): State => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, items: action.payload };

    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default userReducer;
