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
                  <img src="https://s3-alpha.figma.com/hub/file/560731507/027faadf-4fc4-4618-8bbf-e0e6702ca1a8-cover.png" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, minus commodi dolorem omnis exercitationem, dolor
                    eaque voluptatibus recusandae, mollitia iusto dolore
                    dignissimos saepe tenetur necessitatibus.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, minus commodi dolorem omnis exercitationem, dolor
                    eaque voluptatibus recusandae, mollitia iusto dolore
                    dignissimos saepe tenetur necessitatibus.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://s3-alpha.figma.com/hub/file/1511174180/cbbbae94-5efb-428f-956a-a1920448f8b5-cover.png" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, minus commodi dolorem omnis exercitationem, dolor
                    eaque voluptatibus recusandae, mollitia iusto dolore
                    dignissimos saepe tenetur necessitatibus.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://s3-alpha.figma.com/hub/file/1511174180/cbbbae94-5efb-428f-956a-a1920448f8b5-cover.png" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, minus commodi dolorem omnis exercitationem, dolor
                    eaque voluptatibus recusandae, mollitia iusto dolore
                    dignissimos saepe tenetur necessitatibus.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://s3-alpha.figma.com/hub/file/1511174180/cbbbae94-5efb-428f-956a-a1920448f8b5-cover.png" />
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
