import {createBrowserRouter} from 'react-router-dom';
import Home from './homepage/Home';
import SignUp from './SignUp/SignUp';
import Login from './login/Login';

import Edit from './Edit/Edit';
import Add from './Add/Add';

const router = createBrowserRouter([
  // Add routes here
{
    path:'',
    element:<Home/>,
},

{
  path:'/signup',
element:<SignUp/>,
},
{
  path:'/login',
  element:<Login/>
},
{
path:"/signup/''",
element:<Home/>
},
{
  path:'/edit/:id',
  element:<Edit/>
},
{
  path:'/add',
  element:<Add/>
}



])

export default router;