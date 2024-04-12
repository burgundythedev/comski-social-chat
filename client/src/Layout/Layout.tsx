import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
      <div className="">
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;
   
