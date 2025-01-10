import Footer from "./Footer";
import { aboutus1 } from "../assets/images";
import { aboutus2 } from "../assets/images";

const AboutUs = () => {
    return (
        <>
            <section className="w-full bg-[#1A1A1D] text-white">
                {/* Top Banner */}
                <div className="relative w-full h-[80vh] overflow-hidden flex justify-center items-center">
                    <img
                        src={aboutus1}
                        alt="shoe collection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                {/* About Section */}
                <div className="max-container padding-x py-16">
                    <h2 className="text-4xl font-bold text-[#CD1818] text-center">
                        Who We Are
                    </h2>
                    <p className="text-lg leading-relaxed font-montserrat text-center mt-4 max-w-3xl mx-auto">
                        At <span className="text-[#CD1818] font-bold">Custom Kicks</span>, we
                        are passionate about revolutionizing the way you design and wear
                        shoes. Our platform allows you to create unique footwear using
                        cutting-edge 3D design tools and AI-powered customization options. Our
                        mission is to blend technology, creativity, and craftsmanship to
                        deliver unparalleled footwear experiences.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-[#CD1818] py-16 text-white">
                    <div className="max-container padding-x grid lg:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                            <p className="text-lg leading-relaxed font-montserrat">
                                Our mission is to empower individuals to express their
                                personalities and creativity through custom-designed shoes. We
                                aim to provide a seamless, innovative, and enjoyable customization
                                experience that exceeds your expectations. By leveraging advanced
                                technology, we ensure every shoe is a masterpiece.
                            </p>
                        </div>
                        <img
                            src={aboutus2}
                            alt="Our Mission"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Vision Section */}
                <div className="max-container padding-x py-16">
                    <h2 className="text-4xl font-bold text-[#CD1818] text-center">
                        Our Vision
                    </h2>
                    <p className="text-lg leading-relaxed font-montserrat text-center mt-4 max-w-3xl mx-auto">
                        To be a global leader in personalized footwear by continuously
                        innovating and exceeding customer expectations. We envision a future
                        where everyone can effortlessly bring their dream designs to life.
                    </p>
                </div>

                {/* Footer Banner */}
                <div
                    className="relative w-full h-[40vh] bg-cover bg-center flex justify-center items-center"
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <h1 className="z-10 text-4xl font-bold font-palanquin text-[#CD1818]">
                        Let's Create Your Perfect Pair!
                    </h1>
                </div>
                <Footer />
            </section>
            
        </>
    );
};

export default AboutUs;
