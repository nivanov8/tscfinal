import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function Signin(){
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


                    <h3 style={{margin: "2em 0em 2em 2em"}}>Sign in</h3>

                    <div class="row" style={{margin: "3em 2em 2em 3em"}}>
                        <label for="inputUsername" class="col-sm-1 col-form-label">Username: </label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="inputUsername" placeholder="Username"></input>
                        </div>
                        </div>
                        <div class="row" style={{margin: "3em 2em 0em 3em"}}>
                        <label for="inputPassword" class="col-sm-1 col-form-label">Password: </label>
                        <div class="col-sm-4">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                        </div>
                    </div>

                    <div>
                        <Link to="/myaccount" class="btn btn-primary btn-lg" style={{margin: "8em 2em 2em 3em"}} onClick={verify}>Sign in</Link>
                        <Link to="/signup" class="btn btn-primary btn-lg" style={{margin: "8em 2em 2em 5em"}}>New User</Link>
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

export default Signin;

function verify(event){
    var username = document.getElementById("inputUsername").value;
    var password = document.getElementById("inputPassword").value;

    if (username === ""){
        event.preventDefault();
        alert("Username is empty");
    }
    else if (password === ""){
        event.preventDefault();
        alert("Password is empty");
    }
}