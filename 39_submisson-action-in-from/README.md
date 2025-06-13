## we learn react routers

1.  It is used in root components like main.jsx or ( you can also use in App.jsx)
2.  First of all have to import it
    @using: npm install react-router-dom ( or use : npm i react router dom)
3.  include in app componemt by:

    - import { RouterProvider, createBrowserRouter } from "react-router-dom";
      const router =

           const router = createBrowserRouter([

      {
      path: "/",
      element: <App />,
      children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
      ],
      },
      ]);
      RouterProvider router={router}

## use navigate for for navigating

- import {useNavigate} from "React-router-dom"
- const navigate = useNavigate();
- navigate("./path)

## use of link and to instead of (<a href="./path">)

## use of outlet for rendering children

- import {Outlet} from "react-router-dom";
- use the word Outlet where you want to render children
