import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Services from '../pages/Services/Services';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <h1>Error</h1>,
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
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
            },

        ]
    }

])

export default router;