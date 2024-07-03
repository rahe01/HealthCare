
import Hero from "../Page/Home/Hero/Hero";
import Mission from "../Page/Home/Mission/Mission";
import Navbar from "../Page/Home/Navbar/Navbar";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Hero></Hero>
            <Mission></Mission>
            
        </div>
    );
};

export default Main;