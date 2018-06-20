import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive, Segment, Button, Grid, Header, List, Divider} from 'semantic-ui-react';
import { addAnswer } from '../actions/answer'
import { setCurrentNumber } from '../actions/current'
import { getQuestions } from '../actions/question'

class QuestionAnswer extends Component {
  componentWillMount(){
    if(!this.props.questions || !this.props.questions.length) this.props.getQuestions(this.props.history);
  }
      
  render() {
    const { questions, current, setCurrentNumber, addAnswer } = this.props
    const handleanswer = (answer) => {
        addAnswer({question: questions[current.number].question, 
                    correctanswer: questions[current.number].correct_answer.toLowerCase()=='true'?true:false,
                    answer})
        if(current.number==9) this.props.history.push('/score');
        else setCurrentNumber(++current.number);
    } 
    const questiondata=questions&&questions.length>0?
        (<div><Header as='h3' style={{ fontSize: '1.6em' }}>{questions[current.number].category}</Header>
        <Header as='h3' style={{ fontSize: '1.5em' }}>{questions[current.number].question}</Header></div>):'';
    return (
      <Responsive>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column ui two column centered grid>
                {questiondata}
                <Divider/>
                <Button onClick={() => handleanswer(true)}>True</Button>
                <Button onClick={() => handleanswer(false)}>False</Button>
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
      questions: state.questions,
      current: state.current
    };
}
export default connect(mapStateToProps, {addAnswer, setCurrentNumber, getQuestions})(QuestionAnswer); 
