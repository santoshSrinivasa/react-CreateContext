import React from "react";
import {UserContext} from "./index";

class ComponentF extends React.Component{
  render(){
    return (
     <UserContext.Consumer>
     {
       user => <div>{user}</div>
     }
     </UserContext.Consumer>
    )
  }
}
export default ComponentF;