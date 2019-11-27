import React, { useContext } from "react";
import { UserContext, TitleContext } from "./index";

// class ComponentF extends React.Component {
//   render() {
//     return (
//        <UserContext.Consumer>
//        {
//          user => {
//            return (
//              <TitleContext.Consumer>
//              {
//                title => {
//                  return (
//                    <div>
//                    {title} - {user}
//                    </div>
//                  )
//                }
//              }
//              </TitleContext.Consumer>
//            )
//          }
//        }
//        </UserContext.Consumer>
//     );
//   }
// }

function ComponentF() {
  const user = useContext(UserContext);
  const title = useContext(TitleContext);
  console.log(user);
  console.log(title);
  return (
    <div>
      {title} - {user}
    </div>
  );
}
export default ComponentF;
