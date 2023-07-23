import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function MyAccount(){
    return(
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

                    <h4 style={{margin: "1em 0em 0em 2em"}}>For You</h4>

                    <div class="row" style={{marginRight:'2em'}}>
                        <div class="container content">
                            <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto">
                                <div class="card card-sm myacc">
                                <img src="https://cf.ijersey.ru/upload/ttmall/img/20220913/4ed0fb1aa13d93e4e4a80eb3e01e5c61.png=z-0,0_f-webp" class="card-img-top" alt="FC Barcelona away jersey"></img>
                                <div class="card-body">
                                    <h5 class="card-title">FC Barcelona Away Jersey</h5>
                                    <Link to="/item" class="stretched-link"></Link>
                                </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                <div class="card card-sm myacc">
                                <img src="https://citysoccerp.com/cdn/shop/products/image_aa57d3a7-c27c-43fa-9fa1-66acf305d906_1200x1200.jpg?v=1661964487" class="card-img-top" alt="Real Madrid Home Jersey"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Real Madrid Home Jersey</h5>
                                    <Link to="/item" class="stretched-link"></Link>
                                </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                <div class="card card-sm myacc">
                                <img src="https://www.imagehandler.net/?istyle=0000&fmt=png&img=A1080070000&iset=0100&c=999&iindex=0007&w=600&h=600" class="card-img-top" alt="PSG Home Jersey"></img>
                                <div class="card-body">
                                    <h5 class="card-title">PSG Home Jersey</h5>
                                    <Link to="/item" class="stretched-link"></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <h4 style={{margin: "0.5em 0em 0em 2em"}}>Recent Purchases</h4>
                        <div class="row" style={{marginRight:'2em'}}>
                            <div class="container content">
                                <div class="row">
                                <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto">
                                    <div class="card card-sm myacc">
                                    <img src="https://cf.ijersey.ru/upload/ttmall/img/20220913/4ed0fb1aa13d93e4e4a80eb3e01e5c61.png=z-0,0_f-webp" class="card-img-top" alt="FC Barcelona Away Jersey"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">FC Barcelona Away Jersey</h5>
                                        <Link to="/item" class="stretched-link"></Link>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                    <div class="card card-sm myacc">
                                    <img src="https://citysoccerp.com/cdn/shop/products/image_aa57d3a7-c27c-43fa-9fa1-66acf305d906_1200x1200.jpg?v=1661964487" class="card-img-top" alt="Real Madrid Home Jersey"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Real Madrid Home Jersey</h5>
                                        <Link to="/item" class="stretched-link"></Link>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                    <div class="card card-sm myacc">
                                    <img src="https://www.imagehandler.net/?istyle=0000&fmt=png&img=A1080070000&iset=0100&c=999&iindex=0007&w=600&h=600" class="card-img-top" alt="PSG Home Jersey"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">PSG Home Jersey</h5>
                                        <Link to="/item" class="stretched-link"></Link>
                                    </div>
                                    </div>
                                </div>
                                </div>
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

export default MyAccount;