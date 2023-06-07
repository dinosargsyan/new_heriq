import Carousel from 'react-bootstrap/Carousel';
import unfpa from '../Img/unfpa_logo.png';
import Slide_1 from '../Img/slide_1.svg';
import Slide_2 from '../Img/slide_2.svg';
import Slide_3 from '../Img/slide_3.svg';
import './Carousel.scss';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} className="carousel_item">
        <img
          className="d-block w-100"
          src = {Slide_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className="carousel_item">
        <img
          
          className="d-block w-100"
          src={Slide_2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel_item'>
        <img
          className="d-block w-100"
          src={Slide_3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;