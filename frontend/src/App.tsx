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
import { Toaster } from "sonner";
import { CreateLogsPage } from "./pages/create-logs-page";
import LandingPage from "./pages/Landing-page";
import MarkdownPage from "./pages/markdown-page";

function App() {
  const { isFullscreen } = useFullscreen();
  const { theme } = useTheme();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header
            className={`flex lg:justify-center px-4 py-2 mt-4 justify-end ${
              isFullscreen ? "hidden" : ""
            }`}
          >
            <div className="relative z-50">
              <NavigationMenuBar />
            </div>
          </header>

          {/* Main content (takes up remaining space) */}
          <main className="flex-1">
            <Routes>
              <Route path="/auth/:page" element={<AuthPage />} />
              <Route path="/feed" element={<HomePage />} />
              <Route path="/home/profile/:id" element={<PublicProfile />} />
              <Route path="/mylist/:listtype" element={<ReadSpace />} />
              <Route path="/blog/:id" element={<ReadBlogPage />} />
              <Route path="/blog/workspace/create" element={<BlogActionPage />} />
              <Route path="/blog/workspace/logs" element={<CreateLogsPage />} />
              <Route path="/blog/actions/:id" element={<BlogActionPage />} />
              <Route path="*" element={<LandingPage />} />
              <Route path="/markdown" element={<MarkdownPage />} />
            </Routes>
          </main>

          {/* Footer (sticks at bottom) */}
          <FooterCommon />
        </div>

        <Toaster
          theme={theme === "dark" ? "dark" : "light"}
          position={"bottom-right"}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
