import React from 'react';
import Stat from './Stat.jsx';
import SectionHeading from '../section-heading/SectionHeading.jsx';
import {Col, Row} from 'react-bootstrap';

class Stats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: 40,
      stars: 100,
      forks: 100,
      languages: 20,
      contributors: 30,
      members: 15
    };
  }

  render() {
    return (
      <div className='container'>
        <SectionHeading text="statistics" />
        <Row className='show-grid text-center'>
          <Col xs={6} lg={2}>
            <Stat name='REPOS' count={this.state.repos} icon='fa fa-github'/>
          </Col>
          <Col xs={6} lg={2}>
            <Stat name='STARS' count={this.state.stars} icon='fa fa-star'/>
          </Col>
          <Col xs={6} lg={2}>
            <Stat name='FORKS' count={this.state.forks} icon='fa fa-code-fork'/>
          </Col>
          <Col xs={6} lg={2}>
            <Stat name='LANGUAGES' count={this.state.languages} icon='fa fa-code'/>
          </Col>
          <Col xs={6} lg={2}>
            <Stat name='CONTRIBUTORS' count={this.state.contributors} icon='fa fa-users'/>
          </Col>
          <Col xs={6} lg={2}>
            <Stat name='MEMBERS' count={this.state.members} icon='fa fa-user'/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Stats;
