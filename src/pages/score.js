import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive, Segment, Button, Grid, Header, List, Divider} from 'semantic-ui-react';

class Score extends Component {
      
  render() {
    const Scoreheader = 'Score';
    const { answers} = this.props
    const ListItems = answers.map(el => {
      return (
        <List.Item>
          <p>{el.correctanswer==el.answer?`+ ${el.question}`:`- ${el.question}`}</p>
        </List.Item>);
      })
    return (
      <Responsive>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column ui two column centered grid>

                <Header as='h3' style={{ fontSize: '1.6em' }}>{Scoreheader}</Header>
                <Divider/>
                <List>
                  {ListItems}
                </List>
                <Divider/>
                <Button onClick={() => this.props.history.push('/')}>Play again?</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Responsive>
    );
  }
}


function mapStateToProps(state) {  
    return {
      answers: state.answers
    };
}
export default connect(mapStateToProps)(Score); 
