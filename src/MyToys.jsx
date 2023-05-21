import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTablae from './ToyTablae';

const MyToys = () => {
  
    const myToyss = useLoaderData()
    const [myToys, setmyToys] = useState(myToyss)
    console.log(myToys)
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
                            myToys={myToys}
                            setmyToys={setmyToys}
                        ></ToyTablae>)
                    }


                </table>
            </div>


        </div>
    );
};

export default MyToys;