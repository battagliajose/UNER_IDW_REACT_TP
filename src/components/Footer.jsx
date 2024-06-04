import "../styles/footer.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const socialIcons = [
  { id: 1, className: "bi bi-facebook px-1" },
  { id: 2, className: "bi bi-twitter px-1" },
  { id: 3, className: "bi bi-instagram px-1" },
  { id: 4, className: "bi bi-youtube px-1" },
  { id: 5, className: "bi bi-telegram px-1" },
];

const links = [
  { id: 1, to: "#", text: "Política" },
  { id: 2, to: "/contacto", text: "Contacto" },
  { id: 3, to: "#", text: "Preguntas frecuentes" },
];

const Footer = () => {
  const location = useLocation();
  const footerBottom =
    location.pathname === "/contacto" || location.pathname === '/admin';

  return (
    <>
      <footer
        className={
          footerBottom
            ? "footer_Bottom bg-dark text-white pt-3 pb-3"
            : "bg-dark text-white pt-3 pb-3"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-md text-center">
              <h2 className="h2_footer">hotelFlix</h2>
              <p className="p_footer">vacaciones inolvidables</p>
            </div>
            <div className="col-md text-center redes">
              <p>seguinos en</p>
              <br />
              {socialIcons.map((icon) => (
                <i key={icon.id} className={icon.className}></i>
              ))}
            </div>
            <div className="col-md text-center">
              {links.map((link) => (
                <p key={link.id}>
                  <Link
                    to={link.to}
                    className="text-reset text-decoration-none"
                  >
                    <span className="p_footer">{link.text}</span>
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
