import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCard from './AllCard';

const AllToyes = () => {
    const allToys= useLoaderData()
   
    return (
        <div className='grid md:grid-cols-2 gap-4'>
           {
            allToys.map(toy=><AllCard
            key={toy._id}
            toy={toy}
            ></AllCard>)
           }
        </div>
    );
};

export default AllToyes;