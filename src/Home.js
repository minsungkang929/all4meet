import React from "react"

const Home = () => {

    return(
        <div id="home" className="intro">
            <div id="carouselExampleIndicators" class="carousel slide bg-dark" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/img-home1.png" class="d-block w-100" data-interval="1000" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src="./images/img-home2.jpg" class="d-block w-100" data-interval="2000" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src="./images/img-home3.png" class="d-block w-100" data-interval="3500" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        
    )
}

export default Home;