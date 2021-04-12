import isEmpty from "../validation/is-empty";

// eslint-disable-next-line
export default function (state, action) {
  const { type, user } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: !isEmpty(user),
        user: user,
        email: "",
        userId: "",
      };
    case "VERIFY":
      return {
        ...state,
        email: user.email,
        userId: user.userId,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: !isEmpty(user),
        user: user,
      };

    default:
      return {
        ...state,
      };
  }
}
