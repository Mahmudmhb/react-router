import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetails from './components/FriendDetails/FriendDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import Postdetails from './components/Postdetails/Postdetails.jsx';
// const router = createBrowserRouter(
//   [{
//       path: '/',
//       element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    // children
    children: [
      {
        path: '/first',
        element: <First></First>
      },
      {
        path: '/friends',
        element: <Friends></Friends>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),

      },
      {
        path: '/friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`),
        
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'/posts/:postId',
        element: <Postdetails></Postdetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
