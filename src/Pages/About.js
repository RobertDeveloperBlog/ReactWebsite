import React, { Component } from 'react'
import { Tab, Container, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="https://avatars.mds.yandex.net/i?id=05f645eddfec4b562bf2391b19ead0bf-4303862-images-thumbs&n=13&exp=1" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, minus commodi dolorem omnis exercitationem, dolor
                    eaque voluptatibus recusandae, mollitia iusto dolore
                    dignissimos saepe tenetur necessitatibus.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://www.arimenerji.com.tr/uploads/images/hizmet_proje_bazli_profesyonel_satin_alma.jpg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, minus commodi dolorem omnis exercitationem, dolor
                    eaque voluptatibus recusandae, mollitia iusto dolore
                    dignissimos saepe tenetur necessitatibus.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://mediahelm.ie/wp-content/uploads/web-design-Trends.jpg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, minus commodi dolorem omnis exercitationem, dolor
                    eaque voluptatibus recusandae, mollitia iusto dolore
                    dignissimos saepe tenetur necessitatibus.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://miro.medium.com/max/1400/1*B6QbI7hrMHdeYfc2uuyJ9Q.jpeg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, minus commodi dolorem omnis exercitationem, dolor
                    eaque voluptatibus recusandae, mollitia iusto dolore
                    dignissimos saepe tenetur necessitatibus.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themagazine.org%2Fwp-content%2Fuploads%2F2020%2F06%2Fe9a8b6f2-8a53-41fe-a792-f3169f9ffbe0-896x504.jpg&f=1&nofb=1" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, minus commodi dolorem omnis exercitationem, dolor
                    eaque voluptatibus recusandae, mollitia iusto dolore
                    dignissimos saepe tenetur necessitatibus.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
