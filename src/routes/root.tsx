import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Members from "../pages/members";

export const navItems=[
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        exact: true,
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        exact: true,
        component: Contact,
    },
    {
        path: '/members',
        name: 'Members',
        exact: true, 
        component: Members,
    },   
]