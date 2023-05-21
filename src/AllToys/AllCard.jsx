

const AllCard = ({ toy }) => {
    const { _id, name, details, sellername, selleremail, quantity, company, date, photo, price,  } = toy
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                {photo ?  <img className="w-56 h-56 m-4" src={photo}/> : <img className="w-56 h-56 m-4" src="https://demofree.sirv.com/nope-not-here.jpg" />}
            {/* <img className="w-56 h-56 m-4" src={photo}/>
            <img className="w-56 h-56 m-4" src="https://demofree.sirv.com/nope-not-here.jpg" alt="Movie" /> */}
                <div className="card-body">
                   <p>Name:{name}</p>
                   <p>Quantity: {quantity}</p>
                   <p>Price {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;