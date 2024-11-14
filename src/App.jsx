import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";

import Dashboard from './screens/Dashboard';

function App() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Dashboard/>,
        },
        {
          path: "about",
          element: <div>About</div>,
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}
export default App;
