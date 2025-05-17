import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Home from "./pages/Home";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Changelog from "./pages/Changelog";
import Documentation from "./pages/Documentation";
import { MarketingLayout } from "./components/layouts/marketing-layout";
import Docs from "./pages/Docs"; // Add this line
import ApiDocs from "./pages/ApiDocs"; // Add this line
        
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Marketing Pages */}
            <Route element={<MarketingLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/documentation" element={<Documentation />} />
              // ... other routes
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/docs" element={<Docs />} /> {/* Add this line */}
              <Route path="/api" element={<ApiDocs />} /> {/* Add this line */}
              
                    
              {/* Catch All */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
