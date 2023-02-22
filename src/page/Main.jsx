import React, { useState, useEffect } from "react";
import NewTableComp from "../Components/table/NewTableComp";
import FilterComp from "./../Components/fliters/FilterComp";
import { useDispatch, useSelector } from "react-redux";
// import TableComp from "./../Components/table/TableComp";
import { getDataFromAPI } from "./../redux/action/DataAction.js";

function Main() {
  const [isCheck, setIsCheck] = useState([]);
  const [requiredData, setRequiredData] = useState([]);
  const apidata = useSelector((state) => state.DataReducer.data);
  const user = useSelector((state) => state.UserAuthReducer.user);
  const loading = useSelector((state) => state.DataReducer.loading);
  const error = useSelector((state) => state.DataReducer.error);
  const dispatch = useDispatch();

  const handleFilter = () => {
    if (isCheck.length === 0) {
      let temp = apidata.filter((item) => item.type === 1);
      setRequiredData(temp);
    }
    if (isCheck.length !== 0) {
      let temp = apidata.filter((item) =>
        isCheck.includes(item.type.toString())
      );
      setRequiredData(temp);
    }
  };

  useEffect(() => {
    console.log("main componet");
    dispatch(getDataFromAPI(user.user._id));
    // dispatch(getDataFromAPI2());
  }, []);

  useEffect(() => {
    // if (loading === false) {
    //   handleFilter();
    // }
    if (apidata.length !== 0) {
      handleFilter();
    }
  }, [isCheck, loading, error]);

  return (
    <div>
      <FilterComp isCheck={isCheck} setIsCheck={setIsCheck} />
      {requiredData.length !== 0 && <NewTableComp data={requiredData} />}
    </div>
  );
}

export default Main;
