import React from "react";

import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);




  return (
    <div>
      <RouterProvider router={appRouter} />
      {/* index.js me app chal rha hai app.js me body and body.js me router provider  */}
    </div>
  );
};

export default Body;
