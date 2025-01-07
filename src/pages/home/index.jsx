import React from 'react';
import '../../index.css';
import App from '../../App';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import GlobalStyle from '../../styles/theme/globalStyle';
import { ContainerFluid } from '../../components/container';
import BannerSection from './components/banner-section';
import CarouselSection from './components/carousel-section';
import BuySection from './components/buy-section';
import Footer from '../../components/footer';

const Home = () => {
    return (
        <ContainerFluid>
            <BannerSection />
            <CarouselSection />
            <BuySection />
            <Footer />
        </ContainerFluid>
    );
}

export default Home;



