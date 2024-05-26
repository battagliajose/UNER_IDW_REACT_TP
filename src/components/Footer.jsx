import '../styles/footer.css'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white pt-3 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md text-center">
                            <h2 className="h2_footer">hotelFlix</h2>
                            <p className="p_footer">vacaciones inolvidables</p>
                        </div>
                        <div className="col-md text-center redes">
                            <p>seguinos en</p>
                            <br />
                            <i className="bi bi-facebook px-1"></i>
                            <i className="bi bi-twitter px-1"></i>
                            <i className="bi bi-instagram px-1"></i>
                            <i className="bi bi-youtube px-1"></i>
                            <i className="bi bi-telegram px-1"></i>
                        </div>
                        <div className="col-md text-center">
                            <p>
                                <a href="#" className="text-reset text-decoration-none">
                                    <span className="p_footer">Política</span>
                                </a>
                            </p>
                            <p>
                                <a href="contacto.html" className="text-reset text-decoration-none">
                                    <span className="p_footer">Contacto</span>
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-reset text-decoration-none">
                                    <span className="p_footer">Preguntas frecuentes</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer