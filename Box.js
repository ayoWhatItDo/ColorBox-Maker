import React from "react";

function Box({
  id,
  handleRemove,
  width = 5,
  height = 5,
  backgroundColor = "teal"
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor
        }}
      />
      <button onClick={remove}>Eradicate the box!</button>
    </div>
  );
}

export default Box;
