import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTablae from './ToyTablae';

const MyToys = () => {
    const myToys = useLoaderData()
    return (
        <div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Details</th>
                            <th>Seller Name</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>


                    {
                        myToys.map(toy => <ToyTablae
                            key={toy._id}
                            toy={toy}
                        ></ToyTablae>)
                    }


                </table>
            </div>


        </div>
    );
};

export default MyToys;