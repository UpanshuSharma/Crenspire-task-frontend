import React, { useState, useEffect } from "react";
import "./FilterComp.css";
import Form from "react-bootstrap/Form";
import { CHECK_BOX_TYPE, TYPE_COLORS } from "../../utils/mock";
function FilterComp({ isCheck, setIsCheck }) {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(CHECK_BOX_TYPE);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  //------------------------------------------------------------------------

  const renderCheckBox = () => {
    return list.map(({ name, id }) => {
      return (
        <div style={{ borderBottom: `2pt solid ${TYPE_COLORS[id]}` }} key={id}>
          <Form.Check
            type={"checkbox"}
            id={id}
            name={name}
            label={name}
            onChange={handleClick}
            checked={
              isCheck.length === 0 && id === "1" ? true : isCheck.includes(id)
            }
          />
        </div>
      );
    });
  };

  return (
    <div className="filter-container">
      <Form.Check
        type={"checkbox"}
        id={"selectAll"}
        name={"selectAll"}
        label={"All"}
        onChange={handleSelectAll}
        checked={isCheckAll}
      />
      {renderCheckBox()}

      {/* <Form.Check type={"checkbox"} id="all" label="ALL" />
      <Form.Check type={"checkbox"} id="type0" label="TYPE-0" />
      <Form.Check type={"checkbox"} id="type1" label="TYPE-1" />
      <Form.Check type={"checkbox"} id="type2" label="TYPE-2" />
      <Form.Check type={"checkbox"} id="type3" label="TYPE-3" />
      <Form.Check type={"checkbox"} id="type4" label="TYPE-4" /> */}
    </div>
  );
}

export default FilterComp;
