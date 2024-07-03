import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#020043]">
      <footer className="footer bg-[#020043] max-w-7xl mx-auto text-white  p-10 ">
        <aside>
          <img src="../../../../public/logo light.png" alt="" />
          <p>
            123 Main Street Anytown, USA <br />
            Postal Code: 12345
            <br />
            <p className="pt-5">Support: support@oyolloo.com <br /> (Available : 10:00am to 07:00pm)</p>
          </p>
        </aside>
        <nav>
        



          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and condition</a>
        </nav>
        <nav>
        



        
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav>
        
    <h6 className="footer-title">Follow Us</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
      <FaFacebook size={25} />
      </a>
      <a>
      <FaInstagram  size={25} />
      </a>
      <a>
      <FaLinkedin size={25} />
      </a>
      <a href=""><FaYoutube size={25} /></a>
    </div>
  
         
          <a className="link link-hover">@docplus 2024</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
