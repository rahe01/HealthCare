
import Discount from "../Page/Home/Discount/Discount";
import Faq from "../Page/Home/FAQ/Faq";
import Hero from "../Page/Home/Hero/Hero";
import Mission from "../Page/Home/Mission/Mission";
import Navbar from "../Page/Home/Navbar/Navbar";
import Service from "../Page/Home/Service/Service";
import Testimonial from "../Page/Home/Testimonial/Testimonial";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Hero></Hero>
            <Mission></Mission>
            <Service></Service>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Discount></Discount>
            
        </div>
    );
};

export default Main;