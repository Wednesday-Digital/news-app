import React from "react";

const NewsQueryInput = (props) => {
  const onChangeInput = (event) => {
    const { callTheAPIFunc } = props;
    if (callTheAPIFunc && event && event.target && event.target.value) {
      callTheAPIFunc(event.target.value);
    }
  };

  return (
    <div>
      <input type="text" onChange={(event) => onChangeInput(event)}></input>
    </div>
  );
};

export { NewsQueryInput };
