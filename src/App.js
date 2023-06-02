import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import CustomSidebar from "./components/CustomSidebar";
import Header from "./components/Header";
import ProductDetails from "./screens/ProductDetails";
import ProductEdit from "./screens/ProductEdit";
import ProductList from "./screens/ProductList";
import ProductAdd from "./screens/ProductAdd";
import ProductGrid from "./screens/ProductGrid";
import ShoppingCart from "./screens/ShoppingCart";
import CheckOut from "./screens/CheckOut";
import CategoriesList from "./screens/CategoriesList";
import CategoriesEdit from "./screens/CategoriesEdit";
import DashboardScreen from "./screens/DashboardScreen";
import CategoriesAdd from "./screens/CategoriesAdd";
import OrderList from "./screens/OrderList";
import OrderDetails from "./screens/OrderDetails";
import OrderInvoices from "./screens/OrderInvoices";
import CustomerList from "./screens/CustomerList";
import CustomerDetails from "./screens/CustomerDetails";
import CouponAdd from "./screens/CouponAdd";
import CouponList from "./screens/CouponList";
import CouponEdit from "./screens/CouponEdit";
import AccountExpenses from "./screens/AccountExpenses";
import AccountInvoices from "./screens/AccountInvoices";
import AccountSalarySlip from "./screens/AccountSalarySlip";

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "DashboardScreen", element: <DashboardScreen /> },
    { path: "ProductGrid", element: <ProductGrid /> },
    { path: "ProductDetails", element: <ProductDetails /> },
    { path: "ProductEdit", element: <ProductEdit /> },
    { path: "ProductAdd", element: <ProductAdd /> },
    { path: "ProductList", element: <ProductList /> },
    { path: "ShoppingCart", element: <ShoppingCart /> },
    { path: "CheckOut", element: <CheckOut /> },
    { path: "CategoriesList", element: <CategoriesList /> },
    { path: "CategoriesEdit", element: <CategoriesEdit /> },
    { path: "CategoriesAdd", element: <CategoriesAdd /> },
    { path: "OrderList", element: <OrderList /> },
    { path: "OrderDetails", element: <OrderDetails /> },
    { path: "OrderInvoices", element: <OrderInvoices /> },
    { path: "CustomerList", element: <CustomerList /> },
    { path: "CustomerDetails", element: <CustomerDetails /> },
    { path: "CouponList", element: <CouponList /> },
    { path: "CouponEdit", element: <CouponEdit /> },
    { path: "CouponAdd", element: <CouponAdd /> },
    { path: "AccountExpenses", element: <AccountExpenses /> },
    { path: "AccountInvoices", element: <AccountInvoices /> },
    { path: "AccountSalarySlip", element: <AccountSalarySlip /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <div>
      <Router>
        <div className="Full-page-view">
          <CustomSidebar />
          <div className="Main-body-view" style={{ flexGrow: 1 }}>
            <Header />
            <AppWrapper />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
