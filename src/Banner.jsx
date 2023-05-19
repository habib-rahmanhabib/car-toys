

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full my-3">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://cdn.create.vista.com/api/media/small/423537896/stock-photo-toy-car-gift-box-pink" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/501024691/photo/farm-toy.jpg?s=612x612&w=0&k=20&c=wKrCEaTB-XVEhAv8ToNGbhlZZSDb77QISZ3ppEIE1F0=" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/526534571/photo/yellow-fifties-toy-model-car.jpg?s=612x612&w=0&k=20&c=UEi0DWJVE-pYJ6vx-YFi89gPMogOmIV2sPfaOWSXj-Y=" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.pinimg.com/736x/1a/69/bf/1a69bf3d8ac7848a607522e6d6ab8dd7.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;