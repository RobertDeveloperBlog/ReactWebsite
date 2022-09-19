import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forestDarkImg from '../Assets/forest-dark.jpg'
import forestSnowImg from '../Assets/forest-snow.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={forestDarkImg} alt="forest" />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              temporibus?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={forestSnowImg} alt="forest" />
          <Carousel.Caption>
            <h3>Snow Forest image</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              temporibus?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={forestDarkImg} alt="forest" />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              temporibus?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
