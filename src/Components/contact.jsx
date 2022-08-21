import React from 'react'

const Contact = () => {
    return (
        <div 
        style={{
            margin:'auto',
            width:'800px',
            border:'solid #000 ',
            paddingBottom: '100px',
        }}
        >

            <section id="contact">

                <h1 className="section-header">Contact</h1>

                <div className="contact-wrapper">



                    <form id="contact-form" className="form-horizontal" role="form">

                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                            </div>
                        </div>

                        <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                        <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div className="alt-send-button">
                                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                            </div>

                        </button>

                    </form>


                    <div className="direct-contact-container">

                        <ul className="contact-list">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Quan Nhan , Ha Noi</span></i></li>

                            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">08-1230-9868</a></span></i></li>

                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">dokhoapa@gmail.com</a></span></i></li>

                        </ul>

                        <div>
                            <ul className="social-media-list">
                                <li><a href="#" target="_blank" className="contact-icon">
                                    <i className="fa fa-github" aria-hidden="true"></i></a>
                                </li>
                                <li><a href="#" target="_blank" className="contact-icon">
                                    <i className="fa fa-codepen" aria-hidden="true"></i></a>
                                </li>
                                <li><a href="#" target="_blank" className="contact-icon">
                                    <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li><a href="#" target="_blank" className="contact-icon">
                                    <i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>

                        <div className="copyright">&copy; HA NOI COMPUTER</div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Contact