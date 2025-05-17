
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ui/theme-toggle";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  footer?: ReactNode;
}

export const AuthLayout = ({
  children,
  title,
  description,
  footer,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <span className="text-3xl font-bold bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark inline-block text-transparent bg-clip-text">
              Threadwise
            </span>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-card p-8 shadow-lg sm:rounded-lg border">
          {children}
        </div>
        {footer && <div className="mt-4 text-center text-sm">{footer}</div>}
      </div>
    </div>
  );
};
