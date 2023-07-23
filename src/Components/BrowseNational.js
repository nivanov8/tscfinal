import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function BrowseNational(){
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

                    <div class="button-container">
                        <div class="search-bar">
                            <input type="text" placeholder="Search Our Items..."></input>
                            <button>
                            <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    

                    <hr></hr>

                    {/*faceted search */}
                
                    <div class='row' style={{marginRight: "2em"}}>
                        <div class="row">
                            <div class="col-sm-2">
                                <h7 style={{margin: "0em 0em 0em 1em"}}>Filters</h7>
                            </div>
                            <div class="col-sm-10">
                                <h7 style={{margin: "0em 0em 0em 7em"}}>4 Results found</h7>
                            </div>
                            
                            

                        </div>
                        
                        <div class="col-sm-2" style={{margin: "2em 0em 0em 0em"}}>
                            
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Jerseys
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <Link to="/browsespecific" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>Club</Link>
                                        <br></br>
                                        <br></br>
                                        <Link to="/browsenational" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>National Team</Link>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Goalkeeper
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <Link to="/browsegloves" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>Gloves</Link>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Shoes
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <Link to="/browsecleats" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>Cleats</Link>
                                        <br></br>
                                        <br></br>
                                        <Link to="/browseturf" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>Turf</Link>
                                        <br></br>
                                        <br></br>
                                        <Link to="/browsespecific" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>Indoor</Link>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Balls
                                    </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <Link to="/browsespecific" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>Game</Link>
                                        <br></br>
                                        <br></br>
                                        <Link to="/browsespecific" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>Training</Link>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Accessories
                                    </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <Link to="/browsespecific" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>Shinpads</Link>
                                        <br></br>
                                        <br></br>
                                        <Link to="/browsespecific" style={{ textDecoration: 'none', color: "grey", marginLeft: "2em"}}>Water bottles</Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-10">
                            
                            <br></br>
                            <br></br>

                            <div class="row">
                                <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                    <div class="card card-sm">
                                    <img src="https://images.footballfanatics.com/argentina-national-team/mens-adidas-lionel-messi-white/light-blue-argentina-national-team-2022-winners-home-replica-jersey_pi5279000_altimages_ff_5279386-37069dd8eb17664c7ad1alt2_full.jpg?_hv=2&w=600" class="card-img-top" alt="Argentina Home Jersey"></img>
                                    <div class="card-body">
                                        <p>Argentina Home Jersey</p>
                                        <Link to="/item" class="stretched-link"></Link>
                                        <p class="card-text" style={{float: "right"}}>$55</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                    <div class="card card-sm">
                                    <img src="https://media-www.atmosphere.ca/product/div-03-softgoods/dpt-74-licensed-clothing/sdpt-22-pro-soccer/333074461/germany-replica-jersey-home-white-s--5802bb21-c502-4579-ba23-c53ad6fb049f-jpgrendition.jpg" class="card-img-top" alt="Germany Home Jersey"></img>
                                    <div class="card-body">
                                        <p>Germany Home Jersey</p>
                                        <Link to="/item" class="stretched-link"></Link>
                                        <p class="card-text" style={{float: "right"}}>$55</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                    <div class="card card-sm">
                                    <img src="https://static.wixstatic.com/media/3f13d8_38268b5389f44b549b8dff55ca25f516~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3f13d8_38268b5389f44b549b8dff55ca25f516~mv2.jpg" class="card-img-top" alt="England Home Jersey"></img>
                                    <div class="card-body">
                                        <p>England Home Jersey</p>
                                        <Link to="/item" class="stretched-link"></Link>
                                        <p class="card-text" style={{float: "right"}}>$55</p>
                                    </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                    <div class="card card-sm">
                                    <img src="https://jerseyloco.com/wp-content/uploads/2022/08/Screen-Shot-2022-09-15-at-4.18.19-AM-PhotoRoom.png" class="card-img-top" alt="Brazil Home Jersey"></img>
                                    <div class="card-body">
                                        <p>Brazil Home Jersey</p>
                                        <Link to="/item" class="stretched-link"></Link>
                                        <p class="card-text" style={{float: "right"}}>$55</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                    <div class="card card-sm invis">
                                    <img src="https://citysoccerp.com/cdn/shop/products/image_aa57d3a7-c27c-43fa-9fa1-66acf305d906_1200x1200.jpg?v=1661964487" class="card-img-top" alt="Juventus Home Jersey"></img>
                                    <div class="card-body">
                                        <p>Juventus Home Jersey</p>
                                        <Link to="/item" class="stretched-link"></Link>
                                        <p class="card-text" style={{float: "right"}}>$55</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 mb-2 mx-auto content">
                                    <div class="card card-sm invis">
                                    <img src="https://citysoccerp.com/cdn/shop/products/image_aa57d3a7-c27c-43fa-9fa1-66acf305d906_1200x1200.jpg?v=1661964487" class="card-img-top" alt="Manchester United Home Jersey"></img>
                                    <div class="card-body">
                                        <p>Manchester United Home Jersey</p>
                                        <Link to="/item" class="stretched-link"></Link>
                                        <p class="card-text" style={{float: "right"}}>$55</p>
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

export default BrowseNational;