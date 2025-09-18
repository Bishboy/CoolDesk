import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'

const App = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

export default App
