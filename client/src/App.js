import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Sustanibility from "./pages/Sustanibility";
import Customer from "./pages/Customer";
import Policies from "./pages/Policies";
import Pagenotfound from "./pages/Pagenotfound";
import Kurtas from "./pages/Kurtas";
import Matching2piece from "./pages/Matching2piece";
import Newin from "./pages/Newin";
import Suits3piece from "./pages/Suits3piece";
import Footwares from "./pages/Footwares";
import AnnualSale from "./pages/AnnualSale";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import Users from "./pages/Admin/Users";
import CreateProduct from "./pages/Admin/CreateProduct";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Formals from "./pages/Formals";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/product/:slug" element={<ProductDetails />} />

      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/orders" element={<Orders />} />
        <Route path="user/profile" element={<Profile />} />
      </Route>
      <Route element={<AdminRoute />}>
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route
          path="/dashboard/admin/create-category"
          element={<CreateCategory />}
        />
        <Route
          path="/dashboard/admin/create-product"
          element={<CreateProduct />}
        />
        <Route path="/dashboard/admin/users" element={<Users />} />
      </Route>
      <Route path="/cart" element={<CartPage />} />

      <Route path="/about" element={<About />} />
      <Route path="/sustanibility" element={<Sustanibility />} />
      <Route path="/customercare" element={<Customer />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/kurtas" element={<Kurtas />} />
      <Route path="/formals" element={<Formals />} />
      <Route path="/matching2piece" element={<Matching2piece />} />
      <Route path="/newin" element={<Newin />} />
      <Route path="/suits3piece" element={<Suits3piece />} />
      <Route path="/footware" element={<Footwares />} />
      <Route path="/annualsale" element={<AnnualSale />} />
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;
