import React from "react";
import {UserContext,TitleContext} from "./index";

class ComponentF extends React.Component{
  render(){
    return (
     <UserContext.Consumer>
     {
       user => {
         return (
           <TitleContext.Consumer>
           {
             title => {
               return (
                 <div>
                 {title} - {user}
                 </div>
               )
             }
           }
           </TitleContext.Consumer>
         )
       }
     }
     </UserContext.Consumer>
    )
  }
}
export default ComponentF;