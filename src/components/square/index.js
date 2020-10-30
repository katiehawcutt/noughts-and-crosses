import React, { useState } from "react";
import "./square.css";

function Square() {
  const [value, setValue] = useState(null);

  return (
    <button
      className="square"
      onClick={() => {
        setValue("X");
      }}
    >
      {value}
    </button>
  );
}

export default Square;

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {this.props.value}
//       </button>
//     );
//   }
// }
