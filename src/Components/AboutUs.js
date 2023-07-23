import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function AboutUs(){
    return (
        <>
            <body>
                <div class="main">
                    <nav class="navbar navbar-expand-lg content">
                        <div class="container-fluid">
                            <Link class="navbar-brand mx-auto" to="/">
                                <div class="tsc">
                                    <span class="header-text">The</span>
                                    <span class="header-text">Soccer</span>
                                    <span class="header-text">Centre</span>
                                </div>
                            </Link>

                            <div class="collapse navbar-collapse middle">
                                <span style={{fontStyle:"italic", marginLeft:'9em'}}>Serving the Soccer Community since 1997</span>
                            </div>
                            
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{maxWidth:'20em'}}>
                                <div className="navbar-nav">
                                    <Link to="/homepageFR" className="btn btn-primary top" style={{ marginRight: "0.5em" }}>
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        FR&nbsp;
                                        <i className="bi bi-translate" style={{ marginLeft: "0.25em" }}></i>
                                    </span>
                                    </Link>
                                    <Link to="/signin" className="btn btn-primary top" style={{ marginRight: "0.5em" }}>
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        Sign in&nbsp;
                                        <i className="bi bi-person" style={{ marginLeft: "0.25em" }}></i>
                                    </span>
                                    </Link>
                                    <Link to="/mycart" className="btn btn-primary top">
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        Checkout&nbsp;
                                        <i className="bi bi-cart4" style={{ marginLeft: "0.25em" }}></i>
                                    </span>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </nav>


                    

                    <div className="row" style={{marginRight:'2em'}}>
                        <div className="col-sm-7">
                            <div>
                            <h3 style={{ margin: "2em 0em 1.5em 2em" }}>About Us</h3>
                            </div>

                            <div className="row" style={{ margin: "2em 0em 1em 3em" }}>
                            <h5>Our Mission</h5>
                            </div>

                            <div className="row">
                            <div className="col-sm-12" style={{ margin: "0em 3.5em 1em 3.5em" }}>
                                <p>At our retail soccer company, we are dedicated to providing soccer enthusiasts with a comprehensive and unparalleled shopping experience. We curate a wide selection of top-notch soccer equipment, apparel, and accessories, partnering with renowned brands to ensure quality. With exceptional customer service, our knowledgeable staff assists customers in finding the perfect items to elevate their game and express their soccer fandom. We foster a vibrant community through online and offline platforms, supporting local initiatives and youth development programs. Our aim is to be the go-to destination for all soccer enthusiasts, inspiring and empowering them to embrace the joy and camaraderie that soccer brings. Through excellence, community engagement, and customer satisfaction, we strive to contribute to the growth and enjoyment of the sport at all levels.</p>
                            </div>
                            </div>

                            <div className="row" style={{ margin: "1em 0em 1em 3em" }}>
                            <h5>Our Quality</h5>
                            </div>

                            <div className="row">
                            <div className="col-sm-12" style={{ margin: "0em 3.5em 2em 3.5em" }}>
                                <p>At our company, we are committed to delivering only the highest quality soccer products to our valued customers. We understand the importance of performance, durability, and safety when it comes to soccer equipment, apparel, and accessories. That is why we meticulously select our suppliers and partners, working closely with renowned brands and manufacturers who share our passion for excellence. Rigorous quality control measures are implemented at every stage of the product journey, from design and production to packaging and delivery. Our dedicated team of experts conducts extensive testing, ensuring that each item meets or exceeds industry standards. We continuously seek feedback from our customers to improve and refine our product offerings. With a relentless focus on quality, we strive to provide soccer enthusiasts with exceptional products that enhance their performance and enjoyment of the beautiful game.</p>
                            </div>
                            </div>
                        </div>

                        <div className="col-sm-5" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                            <img src="https://wallpaperaccess.com/full/1150787.jpg" alt="Soccer Ball" class="imgbg" style={{ width: "60%", height: "auto"}} />
                        </div>
                    </div>

                    


                </div>

                <footer class="footer">
                    <div>
                        <div class="footer-text-left">
                            <p class="footer-text">523 Donald St</p>
                            <p class="footer-text">K1K 2J7</p>
                            <p class="footer-text">Canada, ON</p>
                        </div>
                        <div class="footer-text-right">
                            <div class="row" style={{marginRight: "0"}}>
                                <div class="col-sm-5" style={{marginRight: "1em"}}>
                                    <Link to="/chat" style={{color: "white"}}>Live Chat</Link>
                                </div>
                                <div class="col-sm-4" style={{padding: "0", marginLeft: "2em"}}>
                                    <span class="footer-text">(613)-974-0982</span>
                                </div>
                                <div class="col-sm-1" style={{padding: "0"}}>
                                    <i class="bi bi-telephone"></i>
                                </div>
                                
                                
                            </div>
                            <div class="row" style={{marginRight: "0"}}>
                                <div class="col-sm-5" style={{marginRight: "1em"}}>
                                    <Link to="/aboutus" style={{color: "white"}}>About Us</Link>
                                </div>
                                <div class="col-sm-4" style={{padding: "0", marginLeft: "2em"}}>
                                    <span class="footer-text">tsc@soccer.com</span>
                                </div>
                                <div class="col-sm-1" style={{padding: "0"}}>
                                    <i class="bi bi-envelope"></i>
                                </div>
                                
                            </div>
                            
                            
                            
                            
                        </div>
                        
                    </div>
                </footer>
            </body>
    
        </>
    
    )

}

export default AboutUs;