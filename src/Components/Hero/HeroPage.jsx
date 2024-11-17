import './heropage.css';
import { FaArrowRight } from "react-icons/fa";
import AboutUs from './Components/About/AboutUs';
import Header from './Components/Header/Header';
import HeroPage from './Components/Hero/HeroPage';
import PopularPage from './Components/PopularPage/PopularPage';
import RecentlyPage from './Components/Recently/RecentlyPage';
import SubscribePage from './Components/Subscribe/SubscribePage';
function HeroPage() {
    return (
        <>
            <main className='main hero__contaner'>
                <div className='home__title'>
                    <h3 className='section__title'>Enjoy Delicious</h3>
                    <div className='flex'>
                      <div className="SubLogoImg"></div>
                      <h3 className='section__title'> Sushi Food </h3>
                    </div>
                    <p>Enjoy a good dinner with the best <br /> dishes in
                        the restaurant and improve
                        <br /> your day.</p>
                        <div className="btn">
                        Order Now  <FaArrowRight />

                        </div>
                </div>
                <div className='home__hero_img'>              
                </div>
                <AboutUs/>
                <PopularPage/>
                <RecentlyPage/>
                <SubscribePage/>
            </main>
        </>
    )
}

export default HeroPage;
