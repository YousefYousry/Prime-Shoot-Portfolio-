/* Style direction: Olive Noir Editorial — cinematic dark canvas, restrained olive signal color, and image-led navigation. */
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const GalleryPage = lazy(() => import("./pages/Gallery"));

function GalleryRedirect() {
  useEffect(() => {
    window.location.replace("/#work");
  }, []);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={GalleryRedirect} />
      <Route path="/gallery/:slug" component={GalleryPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Suspense fallback={<main className="site-shell" aria-busy="true" />}>
          <Router />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
