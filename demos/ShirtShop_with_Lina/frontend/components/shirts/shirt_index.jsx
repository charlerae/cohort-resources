import React from 'react';
import ShirtIndexItem from './shirt_index_item';
import ShirtForm from './shirt_form';

// const ShirtIndex = (props) => {
//   const shirts = props.shirts.map(shirt => {
//     return <ShirtIndexItem key={shirt.id} shirt={shirt}/>
//   });


//   return (
//     <>
//       <h2>All The Shirts</h2>
//       <ul>
//         {shirts}
//       </ul>
//     </>
//   )
// }

class ShirtIndex extends React.Component {
  componentDidMount(){
    //debugger
    this.props.fetchAllShirts();
  }

  render(){
    //debugger
    const shirtList = Object.values(this.props.shirts).map((shirt) => {
      return (
        <ShirtIndexItem key={shirt.id} shirt={shirt} />
      )
    })
    return (
      <div className="shirt-list">
       
          {shirtList}
       

      </div>
    )
  }
}
export default ShirtIndex;