import MobileNav from "@/components/shared/Mobilenav";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* sidebar  */}
      <Sidebar />

      {/* mobile-nav  */}
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
