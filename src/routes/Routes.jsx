import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Services from '../pages/Services/Services';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/allfoods/${params.id}`)
            },

        ]
    }

])

export default router;