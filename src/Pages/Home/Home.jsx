import React from 'react';
import Banner from '../../components/Banner/Banner';
import Recent from '../../components/Recent/Recent';
import Reason from '../../components/Reason/Reason';
import Trainers from '../../components/Trainers/Trainers';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reason></Reason>
            <Recent></Recent>
            <Trainers></Trainers>
            
        </div>
    );
};

export default Home;