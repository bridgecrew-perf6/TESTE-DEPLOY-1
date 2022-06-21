import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignForm from "./pages/auth/sign.page";
import { UserProvider } from "./contexts/user.context";
import { MenuProvider } from "./contexts/menu.context";

import { ThemeProvider } from "styled-components";
import ResetCss from "./styles/reset.css.js";
import { theme } from "./styles/theme";
import Posts from "./pages/posts";

import HomePage from "./pages/home/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <MenuProvider>
          <BrowserRouter>
            <ResetCss />
            <Routes>
              <Route path="/" element={<SignForm isSignUp={false} />} />
              <Route path="/sign-up" element={<SignForm isSignUp={true} />} />
              <Route path="/timeline" element={<HomePage />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </BrowserRouter>
        </MenuProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
