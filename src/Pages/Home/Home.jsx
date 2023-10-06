import React from 'react';
import Banner from '../../components/Banner/Banner';
import Pricing from '../../components/Pricing/Pricing';
import Reason from '../../components/Reason/Reason';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reason></Reason>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;