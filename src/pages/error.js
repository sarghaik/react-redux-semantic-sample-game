import React, { Component } from 'react';
import { Responsive, Segment, Button, Grid, Header, List, Divider} from 'semantic-ui-react';

class Intro extends Component {

  render() {
    const errorheader1 = 'Sorry something went wrong';
    const errorheader2 = 'We can\'t get questions for you';
    return (
      <Responsive>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column ui two column centered grid>
                <Header as='h3' style={{ fontSize: '1.6em' }}>{errorheader1}</Header>
                <Header as='h3' style={{ fontSize: '1.5em' }}>{errorheader2}</Header>
                <Divider/>
                <Button onClick={() => this.props.history.push('/')}>Return</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Responsive>
    );
  }
}

export default Intro; 

