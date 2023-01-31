// pages
import Home from "./pages/Home";
import User from "./pages/User";
import Products from "./pages/Products";
import Product from "./pages/Product";

// other
import {FC} from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateUserPage from "./pages/WorkWithUsers/Create/CreateUserPage";
import CreateUserCard from "./pages/WorkWithUsers/Create/components/CreateUserCard";
import UpdateUserPage from "./pages/WorkWithUsers/Update/UpdateUserPage";


// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: "home-route",
        title: "Users",
        path: "/",
        enabled: true,
        component: Home,
      },
      {
        key: "user-route",
        title: "User",
        path: "/user/:id",
        enabled: false,
        component: User,
      },
      {
        key: 'create-user-page-route',
        title: 'Create user',
        path: '/user/create',
        enabled: true,
        component: CreateUserPage
    },
    {
        key: 'update-user-page-route',
        title: 'Update user',
        path: '/user/update',
        enabled: true,
        component: UpdateUserPage
    },    
      {
        key: "products-route",
        title: "Products",
        path: "/products",
        enabled: true,
        component: Products,
      },
      {
        key: "product-route",
        title: "Product",
        path: "/products/:id",
        enabled: false,
        component: Product,
      },
      {
        key: "login-route",
        title: "Login",
        path: "/login",
        enabled: true,
        component: Login,
      },
      {
        key: "register-route",
        title: "Register",
        path: "/register",
        enabled: true,
        component: Register,
      },
]