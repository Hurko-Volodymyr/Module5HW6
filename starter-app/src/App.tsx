import React, {createContext, useState} from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Layout from "./components/Layout/Layout";
import AuthStore from "./stores/AuthStore";
import {IAppStore} from "./interfaces/appStore";

const store: IAppStore = {
  'authStore':  new AuthStore()
}
export const AppStoreContext = createContext(store);

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#98B2D1",
        main: "#98B2D1",
        dark: "#98B2D1",
        contrastText: "#000",
      },
      secondary: {
        main: "#a2a8d3",
        light: "#a2a8d3",
        dark: "#a2a8d3",
        contrastText: "#000",
      },
    },
  });

  const [appStore, setAppStore] = useState(store);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppStoreContext.Provider value={appStore}>
          <Layout>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Layout>
        </AppStoreContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
