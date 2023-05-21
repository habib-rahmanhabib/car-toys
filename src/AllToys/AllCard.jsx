

const AllCard = ({ toy }) => {
    const { _id, name,  sellername,  quantity,  photo, price,  } = toy
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                {photo ?  <img className="w-56 h-56 m-4" src={photo}/> : <img className="w-56 h-56 m-4" src="https://demofree.sirv.com/nope-not-here.jpg" />}
            {/* <img className="w-56 h-56 m-4" src={photo}/>
            <img className="w-56 h-56 m-4" src="https://demofree.sirv.com/nope-not-here.jpg" alt="Movie" /> */}
                <div className="my-auto">
                   <p className="text-amber-700 font-semibold">Name: {name}</p>
                   <p className="text-amber-700 font-semibold">Seller: {sellername}</p>
                   <p className="text-amber-700 font-semibold">Quantity: {quantity}</p>
                   <p className="text-amber-700 font-semibold">Price: ${price}</p>
                  
                    <div className="mt-7">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;