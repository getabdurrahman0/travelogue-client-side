import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://images2.imgbox.com/01/4f/0SsDEJhf_o.jpg"
                        alt="Nomand Paradise"
                     />

                    <Carousel.Caption>
                        <h3>CLIMBING IN THE SWISS ALPS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" 
                    src="https://images2.imgbox.com/40/23/aB8c65Tz_o.jpg" alt="Paradise"/>
                    <Carousel.Caption>
                        <h3>AMAZON RAINFOREST EXPERIENCE</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images2.imgbox.com/f3/ee/XKSiijls_o.jpg"
                        alt="Paradise"
                    />
                    <Carousel.Caption>
                        <h3>EVERYDAY URBAN CONCRETE JUNGLE</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;