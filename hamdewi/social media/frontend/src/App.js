import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './pages/Register';

function App() {


  const router = createBrowserRouter([
    {
    path : '/',
    element:<div>Home Page</div>
    },
    {
      path :'/login',
      element: <div>hello login</div>
    },
    {
      path :'/register',
      element: <Register/>
    }
  ])
  return (
   <>
    <RouterProvider router={router}/>
   </>
  );
}

export default App;
