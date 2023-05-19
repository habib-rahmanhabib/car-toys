

const ToysCard = ({ toy }) => {
    const { name, picture, price, rating } = toy
    return (
        <div>
            <div className="  bg-base-100 border rounded-sm">
               <img className="w-56 h-56 mx-auto" src={picture} alt="Shoes" />
               <hr />
                <div className="card-body">
                    <h2 className=""><span className="text-lg text-black font-bold">Name:</span>{name} </h2>
                    <p><span className="text-lg text-black font-bold">Price:</span> {price}</p>
                    <p><span className="text-lg text-black font-bold">Rating:</span> {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ToysCard;