// pages
import Home from "./pages/Home";
import User from "./pages/User";
import Products from "./pages/Products";
import Product from "./pages/Product";

// other
import {FC} from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";


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
        key: "products-route",
        title: "Products",
        path: "/products",
        enabled: true,
        component: Products,
      },
      {
        key: "product-route",
        title: "Product",
        path: "/product/:id",
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