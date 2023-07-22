import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function ItemGeneric(){
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


                    <h3 style={{margin: "2em 0em 2em 3em"}}>FC Barcelona Away Jersey</h3>

                    <div class="row" style={{margin: "0em 0em 2em 4em"}}>
                        <div class="col-lg-3" style={{margin: "2em 0em 2em 2em"}}>
                            <div class="card display">
                                <img src="https://cf.ijersey.ru/upload/ttmall/img/20220913/4ed0fb1aa13d93e4e4a80eb3e01e5c61.png=z-0,0_f-webp" class="card-img-top" alt="..."></img>
                            </div>
                        </div>
                        <div class="col-lg-4" style={{margin: "5em 0em 2em 3em"}}>
                            <p>FC Barcelona's away jersey boasts a vibrant and stylish design, capturing the club's identity on the road.</p>
                            <div class="row">
                                <label for="inputUsername" class="col-sm-3 col-form-label">Price: </label>
                                <div class="col-sm-6">
                                    <label for="inputUsername" class="col-sm-3 col-form-label">$45 </label>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <label for="inputUsername" class="col-sm-3 col-form-label">Size: </label>
                                <div class="col-sm-6">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Small</option>
                                        <option value="2">Medium</option>
                                        <option value="3">Large </option>
                                        <option value="3">Extra Large </option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <label for="inputUsername" class="col-sm-3 col-form-label">Quantity </label>
                                <div class="col-sm-3">
                                    <p type="text" class="form-control" id="counter" style={{maxWidth: "7em"}} >1</p>
                                    
                                </div>
                                <button class="btn btn-primary btn-lg increment" onClick={increment}>
                                    <i class="bi bi-plus"></i>
                                </button>
                                <button class="btn btn-primary btn-lg increment"  style={{marginLeft:"0.6em"}}  onClick={decrement}>
                                    <i class="bi bi-dash"></i>
                                </button>
                                

                            </div>
                            <div class="row mt-3">
                                <Link to="/confirmationcart" class="btn btn-primary btn-lg" style={{margin: "3em 2em 2em 7em"}}>Add to Cart</Link>
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

export default ItemGeneric;

function increment(){
    var count = document.getElementById("counter");
    var val = parseInt(count.innerHTML);
    count.innerHTML = val+1;
}

function decrement(){
    var count = document.getElementById("counter");
    var val = parseInt(count.innerHTML);
    if (val != 1){
        count.innerHTML = val-1;
    }
}