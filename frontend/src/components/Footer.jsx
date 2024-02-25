import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footerContainer bgPrimary">
        <div className="footer-left">
          <div className="footerImageContainer">
            <img src={logo} alt="Logo" /> Jutta Pasal
          </div>
          <p>JuttaPasal &copy; {currentYear}</p>
        </div>
        <div className="footer-right">
          <div className="linksContainer">
            <a href="https://www.instagram.com/juttapasall/">
              <img
                src={facebook}
                alt="Facebook"
                className="logoIcon facebook"
              />
            </a>
            <a href="https://www.instagram.com/juttapasall/">
              <img src={instagram} alt="Instagram" className="logoIcon " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
