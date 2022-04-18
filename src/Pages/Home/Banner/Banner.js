import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://demo1.wpopal.com/grenda/wp-content/uploads/revslider/slider1/slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Party</h1>
            <p>Let's plan your next event together</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://demo1.wpopal.com/grenda/wp-content/uploads/revslider/slider1/slider2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          <h1>Party</h1>
            <p>Let's plan your next event together</p>
          </Carousel.Caption>
        </Carousel.Item>
        
    
      </Carousel>
    </div>
  );
};

export default Banner;
