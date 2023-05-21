import React from 'react';

const AddedToys = () => {

    const addToysHandler = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const details = form.details.value;
        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const quantity = form.quantity.value;
        const company = form.company.value;
        const date = form.date.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const allInformation = { name, details, sellername, selleremail, quantity, company, date, photo, price }
        console.log(allInformation)

        fetch('http://localhost:5000/Toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allInformation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='bg-green-800 my-2'>
            <form onSubmit={addToysHandler} className='p-3' >
                <div className="flex mb-8">
                    <div className="form-control md:w-1/4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold text-white">Name</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Enter Toys Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold text-white">Price</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Enter The Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold text-white">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Toy Details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold text-white">Seller Name</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Seller Name" name="sellername" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex mb-8">

                    <div className="form-control md:w-1/4 ">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold text-white">Seller Email</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Seller Email" name="selleremail" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold text-white">Quantity</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold text-white">Comapny</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Company name" name="company" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold text-white">Catagory</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Enter Catagory" name="Catagory" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>




                <div className="flex mb-8">
                    <div className="form-control md:w-1/2 ms-4">

                        <label className="label">
                            <span className="label-text text-1xl font-semibold text-white">Photo</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Enter Photo URL" name="photo" required className="input input-bordered w-full" />
                        </label>
                    </div>

                    
                        <div className="form-control md:w-1/2 ms-4">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Date</span>
                            </label>
                            <label className="input-group ">

                                <input type="Datetime-local" placeholder="Enter Time" name="date" className="input input-bordered w-full" />
                            </label>
                        </div>
                   

                </div>



                <input type="submit" value="Add Coffe" className="btn btn-block bg-green-200" />

            </form>
        </div>
    );
};

export default AddedToys;