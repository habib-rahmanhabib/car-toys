import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";
import Banner from "./Banner";

import Marquee from "react-fast-marquee";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Gallary from "./Gallary";

const Home = () => {
    const [toys, setToyes] = useState([])
    const [tabs, setTab] = useState([])

    useEffect(() => {
        fetch('FackData.json')
            .then(res => res.json())
            .then(data => {
                setTab(data)
            })
    }, [])


    const carHandler = () => {
        const filter = tabs.filter(tab => tab.category == 'toy cars')
        console.log(filter)
        setToyes(filter)
    }
    const ambulanceHandler = () => {
        const filter = tabs.filter(tab => tab.category == 'toy ambulance')
        setToyes(filter)
    }
    const tractorHandler = () => {
        const filter = tabs.filter(tab => tab.category == 'toy tractor')
        setToyes(filter)
    }
    const motorbickHandler = () => {
        const filter = tabs.filter(tab => tab.category == 'toy motorcycle')
        setToyes(filter)
    }


    return (
        <div>
            <Banner></Banner>

            <div className=" text-center">
                <h1 className="text-2xl font-semibold bg-black text-white py-2">Cars Gallary</h1>
            </div>
            <Marquee speed={100} direction="right" >

                {
                    toys.map(toy => <Gallary toy={toy} key={toys.id}></Gallary>)
                }
            </Marquee  >
            <div>
                <h1 className="text-2xl font-semiboldbold text-white bg-black py-3 text-center">Shop By Category:</h1>
            </div>
            <Tabs>
                <TabList>
                    <Tab>All Toys</Tab>
                    <Tab onClick={() => carHandler()}>Car</Tab>
                    <Tab onClick={() => ambulanceHandler()}>Ambulance</Tab>
                    <Tab onClick={() => tractorHandler()}>Tractor</Tab>
                    <Tab onClick={() => motorbickHandler()}>Motorbicks</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            tabs.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>



        </div>
    );
};

export default Home;