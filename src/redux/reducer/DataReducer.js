export const DataReducer = (
  state = { data: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "LOADING_DATA_START":
      return { ...state, loading: true, error: false };

    case "LOADING_DATA_SUCCESS":
      return { ...state, data: action.data, loading: false, error: false };

    case "LOADING_DATA_FAIL":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
