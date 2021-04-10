// eslint-disable-next-line
export default function (state, action) {
  const { type, user } = action;

  switch (type) {
    case "GET_ERRORS":
      return {
        error: user,
        loading: false,
      };
    case "CLEAR_ERRORS":
      return "";

    default:
      return { ...state };
  }
}
