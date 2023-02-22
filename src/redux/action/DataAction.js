import * as DataApi from "../../API/DataAPI.js";

export const getDataFromAPI = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DATA_START" });
  try {
    const { data } = await DataApi.getDataFromAPI2(id);
    console.log("data after loading:", data);
    dispatch({ type: "LOADING_DATA_SUCCESS", data: data.items });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING_DATA_FAIL" });
  }
};
