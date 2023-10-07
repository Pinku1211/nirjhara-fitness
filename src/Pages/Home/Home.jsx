import React from 'react';
import Banner from '../../components/Banner/Banner';
import Pricing from '../../components/Pricing/Pricing';
import Reason from '../../components/Reason/Reason';
import Trainers from '../../components/Trainers/Trainers';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reason></Reason>
            <Trainers></Trainers>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;