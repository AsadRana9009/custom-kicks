import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutUs from "./sections/AboutUs";
import AIShoeModeling from "./sections/AIShoeModeling";
import ModalPage from "./sections/ModalPage";

const App = () => {
  const ConditionalNav = ({ children }) => {
    const location = useLocation();
    const hideNavPaths = ["/login", "/signup"];
    const hideNav = hideNavPaths.includes(location.pathname);

    return (
      <>
        {!hideNav && <Nav />}
        {children}
      </>
    );
  };

  return (
    <Router>
      <main className="relative bg-[#1A1A1D]">
        <ConditionalNav>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="xl:padding-l wide:padding-r padding-b">
                    <Hero />
                  </section>
                  <section className="padding">
                    <PopularProducts />
                  </section>
                  <section className="padding">
                    <SuperQuality />
                  </section>
                  <section className="padding-x py-10">
                    <Services />
                  </section>
                  <section className="padding">
                    <SpecialOffer />
                  </section>
                  <section className="padding">
                    <CustomerReviews />
                  </section>
                  <section className="padding-x sm:py-32 py-16 w-full">
                    <Subscribe />
                  </section>
                  <section className="bg-black padding-x padding-t pb-8">
                    <Footer />
                  </section>
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/ai-page" element={<AIShoeModeling />} />
            <Route path="/modal-page" element={<ModalPage />} />
          </Routes>
        </ConditionalNav>
      </main>
    </Router>
  );
};

export default App;
