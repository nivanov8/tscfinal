import '../App.css';
import { Outlet, Link, useNavigate} from "react-router-dom";
import { useEffect } from 'react';



export function Homepage(){
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
                        <input id="searchBar" type="text" placeholder="Search Our Items..."></input>
                        <button>
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                

                <hr></hr>

                <div class="row text-center" style={{marginRight: "2em"}}>
                    <h5 style={{fontSize:'2em'}}>Featured this week</h5>
                </div>

                {/*CARDS*/}
                <div class="container content">
                    <div class="row">
                        <div class="col-lg-3 mb-2 mx-auto">
                            <div class="card">
                                <img src="https://cf.ijersey.ru/upload/ttmall/img/20220913/4ed0fb1aa13d93e4e4a80eb3e01e5c61.png=z-0,0_f-webp" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">FC Barcelona Away Jersey</h5>
                                    <p class="card-text">FC Barcelona's away jersey boasts a vibrant and stylish design, capturing the club's identity on the road.</p>
                                    <Link to="/item" class="btn btn-primary">Buy Now</Link>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3 mb-2 mx-auto content">
                            <div class="card">
                                <img src="https://citysoccerp.com/cdn/shop/products/image_aa57d3a7-c27c-43fa-9fa1-66acf305d906_1200x1200.jpg?v=1661964487" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Real Madrid Home Jersey</h5>
                                    <p class="card-text">Real Madrid's home jersey embodies timeless elegance, reflecting the club's rich heritage and tradition.</p>
                                    <Link to="/item" class="btn btn-primary">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                            
                        <div class="col-lg-3 mb-2 mx-auto content">
                            <div class="card">
                                <img src="https://www.imagehandler.net/?istyle=0000&fmt=png&img=A1080070000&iset=0100&c=999&iindex=0007&w=600&h=600" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">PSG Home Jersey</h5>
                                    <p class="card-text">PSG's home jersey epitomizes sleek sophistication, showcasing the club's modern style and ambition.</p>
                                    <Link to="/item" class="btn btn-primary">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="button-container mt-5">
                    <Link to="/browse" class="btn btn-primary browse-btn">Browse all</Link>
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
export default Homepage;




function AddListener(){
    console.log("here");
    var navigate = useNavigate();
    var searchBar = document.getElementById("searchBar")
    searchBar.addEventListener("keypress", function(event) {
        if(event.keyCode == 13){
            navigate("/browsespecific", {replace: true});
        }
    }
    )
}
