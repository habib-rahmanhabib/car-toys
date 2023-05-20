import React from 'react';
import { BeakerIcon , TrashIcon} from '@heroicons/react/24/solid'

import Swal from 'sweetalert2'

const ToyTablae = ({ toy }) => {
   
    const {_id, name, details, sellername, selleremail, quantity, company, date, photo, price } = toy

    const deleteHandler=_id=>{
      console.log(_id)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //  
        fetch(`http://localhost:5000/toys/${_id}`,{
            method: 'DELETE'
        }
        )
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                   Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
                   )
            }
            console.log(data)
        })
        }
      })
    }

    return (



        <tbody>

            <tr>
                <th>
                    <div className="mask mask-squircle w-20 h-20">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">

                        </div>
                        <div>

                            <p><span className=' font-semibold'>Name:</span> {name}</p>
                            <p><span className=' font-semibold'>Price:</span> {price}</p>
                            <p><span className=' font-semibold'>Quantity:</span> {name}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p><span className=' font-semibold'>Seller Name:</span> {sellername}</p>
                    <p><span className=' font-semibold'>Seller Email:</span> {selleremail}</p>
                </td>
                <td>
                    <div className=' flex items-center gap-3'>
                        <button className=' font-semibold bg-green-300 px-2 rounded'>Edit</button>
                        <button className='' onClick={()=>deleteHandler(_id)}>
                            <TrashIcon className="h-7 w-7 text-blue-500 " /></button>
                    </div>
                </td>

            </tr>


        </tbody>





    );
};

export default ToyTablae;