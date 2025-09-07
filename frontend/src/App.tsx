import "./App.css";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/auth-page";
import { ReadBlogPage } from "./pages/read-blog-page";
import { BlogActionPage } from "./pages/edit-blog-page";
import { HomePage } from "./pages/home-page";
import { NavigationMenuBar } from "./components/navigation-bar";
import { PublicProfile } from "./pages/public-profile-page";
import { FooterCommon } from "./components/footer-common";
import { ReadSpace } from "./pages/read-space";
import { useFullscreen } from "./lib/utils.fullscreen";
import {Toaster} from 'sonner'
import { CreateLogsPage } from "./pages/create-logs-page";

function App() {
  const { isFullscreen } = useFullscreen();
  const {theme}=useTheme();
  return (
    <div className="h-screen w-full overflow-y-scroll scrollbar-hide transition-all">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <header
            className={`flex lg:justify-center px-4 py-2 mt-4 justify-end ${
              isFullscreen ? "hidden" : ""
            }`}
          >
            <div className="relative z-50">
              <NavigationMenuBar />
            </div>
          </header>
          <Routes>
            <Route path="/auth/:page" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/profile/:id" element={<PublicProfile />} />
            <Route path="/blog/mylist/:listtype" element={<ReadSpace />} />
            <Route path="/blog/:id" element={<ReadBlogPage />} />
            <Route path="/blog/workspace/create" element={<BlogActionPage />} />
            <Route path="/blog/workspace/logs" element={<CreateLogsPage />} />
            <Route path="/blog/actions/:id" element={<BlogActionPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <FooterCommon />
        </BrowserRouter>
        <Toaster theme={theme=='dark'?'dark':'light'} position={'bottom-right'} />
      </ThemeProvider>
    </div>
  );
}

export default App;
