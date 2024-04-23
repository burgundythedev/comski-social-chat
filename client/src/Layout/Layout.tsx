import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="p-5 flex flex-col h-screen">
      <Header />
      <main className="flex  justify-center grow md:flex md:justify-center md:items-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
