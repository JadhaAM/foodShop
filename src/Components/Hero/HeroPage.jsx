import './heropage.css';
import { FaArrowRight } from "react-icons/fa";
function HeroPage() {
    return (
        <>
            <main>
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
    
            </main>
        </>
    )
}

export default HeroPage;