import React from "react"

const Contact = () => {

    return(
        <div id="Contact" class="contact-area bg-light pt-100">
            <div class="container">
                <div class="section-title text-center">
                    <h2>get in touch</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="row">
                    <div class="offset-lg-2 col-lg-8 text-center">
                        <div class="contact-from">
                            <form id="contact-form" action="mail.php" method="post">
                                <input name="name" type="text" placeholder="Name" />
                                <input name="email" type="text" placeholder="Email" />
                                <textarea name="message" placeholder="Your message"></textarea>
                                <input class="submit" type="submit" value="SUBMIT" />
                            </form>
                            <p class="form-messege"></p>
                        </div>
                    </div>
                </div>
                <div class="conatct-info fix">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="single-contact-info">
                                <div class="contact-icon">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div class="contact-text">
                                    <span>
                                        +88092 (1) 5184203
                                        <br />
                                        +00 (22) 225455565
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="single-contact-info res-xs2">
                                <div class="contact-icon">
                                    <i class="fa fa-globe" aria-hidden="true"></i>
                                </div>
                                <div class="contact-text">
                                    <span>
                                        <a href="#">info@devitems.com</a>
                                            <br />
                                        <a href="#">devitems@email.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="single-contact-info">
                                <div class="contact-icon">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div class="contact-text">
                                    <span>
                                        ur address goes here,
                                        <br />
                                        street,Crossroad123.
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