import React from 'react';

const UpdateToys = () => {
    const coffeHandler = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffe = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffe);
    }

    return (
        <div>
            <form onSubmit={coffeHandler} >
                <div className="flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold"> Name</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Enter Coffe name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold">Chef</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Coffe Chef" name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* supply section */}
                <div className="flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold">Supplier</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Enter Coffe Supplier" name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Coffe Taste" name="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* catagorry section */}
                <div className="flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold">Catagory</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" placeholder="Enter Coffe Catagory" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ms-4">
                        <label className="label">
                            <span className="label-text text-1xl font-semibold">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Coffe Details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* details section */}


                <div className="form-control md:w-full mb-8">
                    <label className="label">
                        <span className="label-text text-1xl font-semibold">Photo</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered w-full" />
                    </label>
                </div>



                <input type="submit" value="Add Coffe" className="btn btn-block" />

            </form>

        </div>
    );
};

export default UpdateToys;