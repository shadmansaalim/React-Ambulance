import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Records from '../Records/Records';
import OurValues from '../OurValues/OurValues';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <section className="container">
                <Services></Services>
                <Records></Records>
                <OurValues></OurValues>
            </section>
        </main>
    );
};

export default Home;