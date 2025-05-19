import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { MarketingLayout } from "./components/layouts/marketing-layout";
import { AboutPage } from "@/pages/AboutPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
              <Route path="about" element={<AboutPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              {/* <Route path="/features" element={<Features />} /> */}
              {/* <Route path="/how-it-works" element={<HowItWorks />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/blog" element={<Blog />} /> */}
              {/* <Route path="/changelog" element={<Changelog />} /> */}
              {/* <Route path="/documentation" element={<Documentation />} /> */}
              {/* <Route path="/docs" element={<Docs />} /> */}
              {/* <Route path="/api" element={<ApiDocs />} /> */}
              {/* Catch All */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <SpeedInsights /> {/* Add the component here */}
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
