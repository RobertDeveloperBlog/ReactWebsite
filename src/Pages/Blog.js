import React, { Component } from 'react'
import { Container, Card, ListGroup, Col } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <div className="d-flex align-items-center mt-5">
          <div className="flex-shrink-0">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2019%2F01%2FJavaScript_Logo.png&f=1&nofb=1"
              alt="js"
              width="150"
              height="150"
            />
          </div>
          <div className="flex-grow-1 ms-3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste nisi
            beatae soluta vero esse voluptatibus ratione commodi, deleniti,
            maiores sequi eaque nemo eligendi officia illum perspiciatis
            exercitationem rerum minus error?
          </div>
        </div>
        <div className="d-flex align-items-center mt-5">
          <div className="flex-shrink-0">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2019%2F01%2FJavaScript_Logo.png&f=1&nofb=1"
              alt="js"
              width="150"
              height="150"
            />
          </div>
          <div className="flex-grow-1 ms-3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste nisi
            beatae soluta vero esse voluptatibus ratione commodi, deleniti,
            maiores sequi eaque nemo eligendi officia illum perspiciatis
            exercitationem rerum minus error?
          </div>
        </div>
        <div className="d-flex align-items-center mt-5">
          <div className="flex-shrink-0">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2019%2F01%2FJavaScript_Logo.png&f=1&nofb=1"
              alt="js"
              width="150"
              height="150"
            />
          </div>
          <div className="flex-grow-1 ms-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste nisi
            beatae soluta vero esse voluptatibus ratione commodi, deleniti,
            maiores sequi eaque nemo eligendi officia illum perspiciatis
            exercitationem rerum minus error?
          </div>
        </div>
      </Container>
    )
  }
}
