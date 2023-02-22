import * as AuthApi from "../../API/UserAuthAPI.js";

export const login = (form_data) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.login(form_data);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signup = (form_data) => async (dispatch) => {
  // console.log("Dispatch signup action");
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signup(form_data);
    // console.log("data after successful register : ", data);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
