import React from 'react';

const UpdateToys = () => {
    const coffeHandler = event => {
        event.preventDefault();
        const form = event.target;


        const quantity = form.quantity.value;
        const price = form.price.value;
        const details = form.details.value;
        console.log(quantity, price, details)



    }

    return (
        <div>
            <form onSubmit={coffeHandler} >
                <div className="flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold">Price</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Update Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold">available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Update Quantity" name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                <div className="flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold">Details Drescription</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Updatae Details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>



                <input type="submit" value="Submit" className="btn btn-block bg-gray-300" />

            </form>

        </div>
    );
};

export default UpdateToys;