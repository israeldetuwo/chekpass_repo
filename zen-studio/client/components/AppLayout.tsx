import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Calendar, CreditCard, ChevronDown } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, count: null },
  { name: "Events", href: "/", icon: Calendar, count: 26 },
  { name: "Transactions", href: "/transactions", icon: CreditCard, count: null },
];

export default function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[314px] bg-black flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center justify-center h-20 px-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold text-xl">C</span>
            </div>
            <span className="text-white font-bold text-xl">ChekPass</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex flex-col gap-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-4 px-8 py-4 transition-colors relative",
                  isActive
                    ? "bg-chekpass-black-main border-l-4 border-chekpass-accent"
                    : "bg-black hover:bg-chekpass-black-main"
                )}
              >
                <Icon
                  className={cn(
                    "w-6 h-6",
                    isActive ? "text-white" : "text-chekpass-black-250"
                  )}
                />
                <div className="flex items-center justify-between flex-1">
                  <span
                    className={cn(
                      "font-lato text-base leading-[150%]",
                      isActive ? "text-white font-black" : "text-chekpass-black-250 font-normal"
                    )}
                  >
                    {item.name}
                  </span>
                  {item.count && (
                    <div className="w-6 h-6 rounded-full bg-chekpass-accent flex items-center justify-center">
                      <span className="text-white font-bold text-xs leading-[120%]">
                        {item.count}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-chekpass-black-150 px-10 flex items-center justify-between bg-white">
          <h1 className="font-lato font-black text-base text-chekpass-black-main">
            Hello Adedeji 👋
          </h1>
          <button className="flex items-center gap-2 px-2 py-2 rounded-full bg-chekpass-black-100">
            <div className="flex items-center gap-1">
              <span className="text-chekpass-black-main font-black text-xs px-2">AO</span>
            </div>
            <ChevronDown className="w-4 h-4 text-chekpass-black-250" />
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
