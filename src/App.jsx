import { Route, Routes, useLocation } from "react-router-dom";
import { router } from "./router";
import { AnimatePresence } from "framer-motion";
import "./App.scss";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          {router.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {router.map(
            (route) =>
              route.children &&
              route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))
          )}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
