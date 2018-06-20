import React, { Component } from 'react';
import { Responsive, Segment, Button, Grid, Header, List, Divider} from 'semantic-ui-react';

class Intro extends Component {

  render() {
    const introheader1 = 'Welcome to the Chalange';
    const introheader2 = 'You will be presented with 10 true/false questions';
    const introheader3 = 'Can you score 100%?';
    return (
      <Responsive>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column ui two column centered grid>
                <Header as='h3' style={{ fontSize: '1.6em' }}>{introheader1}</Header>
                <Header as='h3' style={{ fontSize: '1.5em' }}>{introheader2}</Header>
                <Divider/>
                <Button onClick={() => this.props.history.push('/questionanswer')}>Begin</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Responsive>
    );
  }
}

export default Intro; 

