import React from 'react';
import moment from 'moment';

class MatchDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      matchDetails:{}
    }
   
  }
  componentDidMount(){
    this.setState({matchDetails:this.props.matchDetails})
  }
  componentWillReceiveProps(){
    this.setState({matchDetails:this.props.matchDetails})
  }
  render(){
    let { matchDetails } = this.props;
    console.log(this.props)
    return (
      <div className="card" style={{marginBottom:20}}>
        <div className="card-body">
          <h5 className="card-title">Match Details</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <span class="team1">{matchDetails?matchDetails[0]['team-1']:''}</span>
            <span class="vs">Vs</span>
            <span class="team2">{matchDetails?matchDetails[0]['team-2']:''}</span>
          </h6>
          <h4 style={{color:'green'}}>{matchDetails?matchDetails[0]['type']:''}</h4>
          {matchDetails[0]['matchStarted']?<h6>Toss : {matchDetails[0]['toss_winner_team']}</h6>:''}
          {matchDetails[0]['winner_team']?<h6>Winner : {matchDetails[0]['winner_team']}</h6>:''}
          <h6>Date : { moment.utc(new Date(matchDetails[0]['dateTimeGMT']), 'MM-DD-YYYY').local().format("DD MMM YYYY HH:mm")} GMT</h6> 
        </div>
      </div>
    )
  }
 
}
export default MatchDetails;