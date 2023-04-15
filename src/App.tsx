import {
  Link,
  RouterProvider,
  createBrowserRouter,
  // Routes,
  // Route,
  // createRoutesFromElements,
} from "react-router-dom";
import HelloWorld from "./HelloWorld";
import PlacesPage from "./pages/Places";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes path="/" element={<></>}>
//       <Route index element={<HelloWorld />} />
//       <Route path="places" element={<PlacesPage />} />
//       <Route
//         path="hello"
//         element={
//           <div>
//             <h1>Hello World</h1>
//             <Link to="/">Back to Home</Link>
//           </div>
//         }
//       />
//     </Routes>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloWorld />,
    // errorElement: <ErrorPage />,
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
