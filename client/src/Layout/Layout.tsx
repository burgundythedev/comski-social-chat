import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden lg:p-5">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};


export default Layout;
