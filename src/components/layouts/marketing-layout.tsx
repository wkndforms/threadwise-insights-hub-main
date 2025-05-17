
import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { MarketingNavbar } from "../navbar/marketing-navbar";
import { MarketingFooter } from "../footer/marketing-footer";

export const MarketingLayout = () => {
  const location = useLocation();
  const [shouldRenderNavAndFooter, setShouldRenderNavAndFooter] = useState(true);

  // Effect to check if the current page already has navbar and footer
  useEffect(() => {
    // Check if we're on a route that might already have its own navigation/footer
    const currentPath = location.pathname;
    
    // If we're on a dashboard path, don't render the marketing nav/footer
    if (currentPath.startsWith('/dashboard')) {
      setShouldRenderNavAndFooter(false);
    } else {
      setShouldRenderNavAndFooter(true);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {shouldRenderNavAndFooter && <MarketingNavbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {shouldRenderNavAndFooter && <MarketingFooter />}
    </div>
  );
};
