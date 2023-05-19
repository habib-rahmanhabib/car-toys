import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ToysCard = ({ toy }) => {
    const { name, picture, price, rating } = toy
    return (
        <div>
            <div className="  rounded-sm shadow-lg">
               <img className="w-56 h-56 mx-auto" src={picture} alt="Shoes" />
               <hr />
                <div className="ms-4">
                    <h2 className=""><span className="text-lg text-black font-semiboldbold">Name:</span> {name} </h2>
                    <p><span className="text-lg text-black font-bold">Price:</span> {price}</p>
                    <p><span className="text-lg text-black font-bold">Rating:</span> {rating}<Rating style={{ maxWidth: 100 }} value={rating} readOnly/></p>
                    <div className="my-2">
                        <button className="btn ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ToysCard;