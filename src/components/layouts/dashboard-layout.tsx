import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ui/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Home,
  Settings,
  BarChart3,
  Bell,
  LayoutDashboard,
  Users,
  LogOut,
  Menu,
  X,
  Activity,
  MessagesSquare,
  History,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole?: "admin" | "customer";
}

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  path: string;
  roles?: Array<"admin" | "customer">;
}

const sidebarItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  {
    icon: MessagesSquare,
    label: "Forums Configuration",
    path: "/dashboard/forums",
  },
  { icon: Bell, label: "Notifications", path: "/dashboard/notifications" },
  { icon: History, label: "Logs & History", path: "/dashboard/logs" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  {
    icon: Users,
    label: "User Management",
    path: "/dashboard/users",
    roles: ["admin"],
  },
  {
    icon: Activity,
    label: "System Health",
    path: "/dashboard/health",
    roles: ["admin"],
  },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

export const DashboardLayout = ({
  children,
  userRole = "customer",
}: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const filteredSidebarItems = sidebarItems.filter(
    (item) => !item.roles || item.roles.includes(userRole)
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:z-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/dashboard" className="flex items-center gap-2">
              {/* <img src="/placeholder.svg" alt="Logo" className="h-7 w-7" /> */}
              <span className="text-xl font-bold bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark inline-block text-transparent bg-clip-text">
                ForumScout
              </span>
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {filteredSidebarItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      )}
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <Link
              to="/"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navigation */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center ml-auto space-x-4">
            <ThemeToggle />
            <div className="relative">
              <Button
                variant="ghost"
                className="rounded-full w-8 h-8 aspect-square"
              >
                <span className="sr-only">User profile</span>
                <div className="rounded-full bg-primary/10 text-primary h-8 w-8 flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};
