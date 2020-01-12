import React from 'react';
import api from '../utils/api'

class PlayerDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerDetails:{},
      players:[]
    }
  }
  handleSearchPlayer=()=>{
    let playerName = this.refs.name.value;
    api.get(`/api/playerFinder?name=${playerName}`)
    .then((response) => {
      this.setState({players:response.data})
    })
    .catch((error) => {
      this.setState({players:[]})
    })
  }
  handleFullDetails=(id)=>{
    
    api.get(`/api/playerStats?pid=${id}`)
    .then((response) => {
      this.setState({playerDetails:response.data})
    })
    .catch((error) => {
      this.setState({playerDetails:null})
    })
  }

  render(){
    let {players,playerDetails} =  this.state
    console.log("...",this.state)
    return (
      <div>
      <div className="input-group mb-3">
        <input type="text" ref="name" className="form-control" placeholder="search player"/>
        <div className="input-group-append">
          <button className="btn btn-danger" onClick={this.handleSearchPlayer} type="button">Search</button>
        </div>
      </div>
      {players && players.data && players.data.length>0?
        players.data.map((item,index)=>{
          return(
            <button key={item.pid} type="button" onClick={()=>this.handleFullDetails(item.pid)} className="btn btn-secondary">{item.name}</button>
          )
        }):''}
        {playerDetails && playerDetails.data?
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{playerDetails.name}</h5>
                <h6>country : {playerDetails.country}</h6>
                <p>{playerDetails.profile}</p>
                <ul>
                  <li>Batting Style : {playerDetails.battingStyle}</li>
                  <li>Bowling Style : {playerDetails.bowlingStyle}</li>
                  <li>Major Teams : {playerDetails.majorTeams}</li>
                  <li>Current Age : {playerDetails.currentAge}</li>
                  <li>DOB : {playerDetails.born}</li>
                  <li>Playing Role : {playerDetails.playingRole}</li>
                </ul>
              </div>
          </div>
        :''}
      </div>
    )
  }
 
}
export default PlayerDetails;