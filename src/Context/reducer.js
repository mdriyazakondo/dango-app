export const SET_COCKALILS = "SET_COCKALILS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === SET_COCKALILS) {
    return { ...state, cocktails: payload, loading: false, error: null };
  }
  if (type === SET_LOADING) {
    return { ...state, loading: payload };
  }
  if (type === SET_COCKALILS) {
    return { ...state, error: payload };
  }
};
