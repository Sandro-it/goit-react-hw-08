import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { selectIsLoading, selectError } from "../redux/contacts/selectors.js";
import Loader from "./loader/Loader.jsx";
import { refreshUser } from "../redux/auth/operations.js";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { RestrictedRoute } from "./RestrictedRoute.jsx";
import useAuth from "../hooks/UseAuth.jsx";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const RegisterPage = lazy(() => import("../pages/RegisterPage.jsx"));
const LoginPage = lazy(() => import("../pages/LoginPage.jsx"));
const ContactsPage = lazy(() => import("../pages/ContactsPage.jsx"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div className={css.mainLoader}>
      <Loader />
    </div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
