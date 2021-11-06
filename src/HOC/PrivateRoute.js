import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={props => {
          return (currentUser ? <Component {...props} /> : <Redirect to="/login" />)
      }
       
      }
    ></Route>
  );
}

// function PrivateRoute({ children, ...rest }) {
//   const { currentUser } = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         currentUser ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

export default PrivateRoute;
