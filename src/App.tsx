import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToHash from "@/components/ScrollToHash";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Clients from "./pages/Clients";
import Solutions from "./pages/Solutions";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
          <BrowserRouter>
            <ScrollToHash />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
