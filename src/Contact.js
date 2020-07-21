import React from "react"

const Contact = () => {

    return(
        <div id="Contact" className="contact-area bg-light pt-100">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Get in touch</h2>
                    <p>Give any questions, suggestions or support. Thank you.</p>
                </div>
                <div className="row">
                    <div className="offset-lg-2 col-lg-8 text-center">
                        <div className="contact-from">
                            <form id="contact-form" action="mail.php" method="post">
                                <input name="name" type="text" placeholder="Name" />
                                <input name="email" type="text" placeholder="Email" />
                                <textarea name="message" placeholder="Your message"></textarea>
                                <input className="submit" type="submit" value="SUBMIT" />
                            </form>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                </div>
                <div className="conatct-info fix">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="single-contact-info">
                                <div className="contact-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="contact-text">
                                    <span>
                                        +1 (123) 123-xxxx
                                        <br />
                                        +1 (123) 123-zzzz
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="single-contact-info res-xs2">
                                <div className="contact-icon">
                                    <i className="fa fa-globe" aria-hidden="true"></i>
                                </div>
                                <div className="contact-text">
                                    <span>
                                        <a href="#">info@all4meet.com</a>
                                            <br />
                                        <a href="#">help@all4meet.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="single-contact-info">
                                <div className="contact-icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div className="contact-text">
                                    <span>
                                        123 Heaven Street, CloudCity,
                                        <br />
                                        Sky, God.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;