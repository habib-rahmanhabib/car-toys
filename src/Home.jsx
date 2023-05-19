import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";
import Banner from "./Banner";



const Home = () => {
    const [toys, setToyes]=useState([])

    useEffect(()=>{
        fetch('FackData.json')
        .then(res=>res.json())
        .then(data=>{
            setToyes(data)
        })
    },[])
    return (
        <div>
           <Banner></Banner>
          <div className="grid md:grid-cols-3 gap-5 mb-5">
           {
            toys.map(toy=><ToysCard
            key={toy.id}
            toy={toy}
            ></ToysCard>)
           }
          </div>
         
        </div>
    );
};

export default Home;