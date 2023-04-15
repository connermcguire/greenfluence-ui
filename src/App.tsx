import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import PlacesPage from "./pages/Places";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloWorld />,
  },
  {
    path: "places",
    element: <PlacesPage />,
  },
  {
    path: "hello",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="/">Back to Home</Link>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
