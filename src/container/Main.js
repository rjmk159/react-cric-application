import React from 'react';
import MainComponent from '../assets/css/MainComponent.style';
import RecentMatches from '../components/UpCommingMatches';
import MatchDetails from '../components/MatchDetails';
import PlayerDetails from '../components/PlayerDetails';
import api from '../utils/api'

class Main extends React.Component {
  state={
    matches:[],
    matchDetails:null,
  }
  componentDidMount(){
    this.renderUpcomingMatches()
  }
  handleMatchDetails=(id)=>{
    let {matches} =  this.state;
    let matchDetails = matches.filter((item)=>{return item.unique_id==id})
    console.log("matchDetails",matchDetails)
    this.setState({matchDetails:matchDetails});
  }
  renderUpcomingMatches=()=>{
    api.get('/api/matches')
    .then((response) => {
      this.setState({matches:response.data.matches})
    })
    .catch((error) => {
      this.setState({matches:[]})
    })
  }

  render(){
    return (
      <MainComponent>
          <div className="hero-banner">
            <div className="container">
              <h2>If you Don’t Practice
                You <br/><span style={{color:'#ffcb05'}}>Don’t Derserve</span><br/>
                to win!
              </h2>
            </div>
          </div>
          <div className="container" style={{paddingTop:42,paddingBottom:42}}>
            <div className="row">
              <div className="col-md-4">
                <RecentMatches recentMatches = {this.state.matches} getMatchDetail={(id)=>{this.handleMatchDetails(id)}}/>
              </div>
              <div className="col-md-8">
                {this.state.matchDetails ? <MatchDetails matchDetails = {this.state.matchDetails}/>:''}
                <PlayerDetails />
              </div>
            </div>
          </div>
      </MainComponent>
    )
  }
 
}
export default Main;