import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <section className="container">
                <Services></Services>
            </section>
        </main>
    );
};

export default Home;