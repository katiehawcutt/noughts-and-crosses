import React from 'react'

function Square({value}){
  return(
    <button className="square">{value}</button>
  )
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