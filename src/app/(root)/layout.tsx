import MobileNav from "@/components/shared/Mobilenav";
import Sidebar from "@/components/shared/Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* sidebar  */}
      <Sidebar />

      {/* mobile-nav  */}
      <MobileNav />
      <div className="root-container">
        <div>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
