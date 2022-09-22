import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, CardGroup, Card, Button } from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup className="m-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://4dealer.ru/static/item_pictures/18/fa/afd9eb9b20e4ebc0902e456e0805b682.jpg"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  molestiae sint at!
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://ucare.timepad.ru/90e83611-24ca-411f-9c7e-d8901b7be707/poster_event_651835.jpg"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  molestiae sint at!
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://oratoris.ru/wp-content/uploads/2020/01/1.jpg"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  molestiae sint at!
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}
