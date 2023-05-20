import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyToys = () => {
    const myToys = useLoaderData()
    return (
        <div>
           {
            myToys.map()
           }
        </div>
    );
};

export default MyToys;