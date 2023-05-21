import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const OurVisitor = () => {
    return (
        <div>
            <h1 className='text-5xl text-sky-600 text-center my-6'>Ouer Visitor</h1>
            <hr />
            <div  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='grid md:grid-cols-4 my-8 justify-center'>
                <div  className=''>
                    <img className='rounded-full h-56 w-56 text-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nOp4v9KJmAEWxhZv_rCwZHX8EuVIjyPz3A&usqp=CAU" alt="" />
                    <div className='mt-4'>
                        <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Adrin Pilon</p>
                        <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Marketing Manager</p>
                    </div>
                </div>
                <div>
                    <img className='rounded-full h-56 w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag7xmdSjm0Lp161mAq4sm9Pfm6x9xVgZPZg&usqp=CAU" alt="" />
                    <div className='mt-4'>
                        <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Vone Pope</p>
                        <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Banker</p>
                    </div>
                </div>
                <div>
                    <img className='rounded-full h-56 w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevZUdSn7F4eYaPIAChEMz6O4BRBAJ1sM0gA&usqp=CAU" alt="" />
                    <div className='mt-4'>
                        <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Caypran Pamuta</p>
                        <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Enganier</p>
                    </div>
                </div>
                <div>
                    <img className='rounded-full h-56 w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsbilc7p4CbwwY2hwu6ziEpL_Szh_vxXbtg&usqp=CAU" alt="" />

                    <div className='mt-4'>
                        <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Steven Androws</p>
                        <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Self Empolyer</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurVisitor;