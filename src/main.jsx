import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Roots/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesRead from './components/PagesRead/PagesRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import Category from './components/Category/Category';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/booklist",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('fake.json')
      },
      {
        path: "/read",
        element: <PagesRead></PagesRead>,
        loader: () => fetch('fake.json')
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('fake.json')
      },
      {
        path: "/category",
        element: <Category></Category>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
