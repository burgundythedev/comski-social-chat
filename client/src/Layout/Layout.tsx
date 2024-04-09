import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
      <div className="flex flex-col h-screen mx-4 sm:mx-10 md:mx-16 lg:mx-20">
        <Header />
        <main className="flex-grow flex flex-col justify-center overflow-y-auto sm:overflow-y-hidden">
          {children}
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;
   
