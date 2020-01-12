import React from 'react';


class RecentMatches extends React.Component {
  state={
    matches:[]
  }
  componentWillReceiveProps(nextProps){
    this.setState({matches:nextProps.recentMatches})
  }

  render(){
    let { matches } = this.state;
    return (
      <div className="card" >
        <div className="card-header">
         Recent and upcoming Matches
        </div>
        <ul className="list-group list-group-flush">
          {matches.map((item,index)=>{
            return(
              <li 
                className="list-group-item" 
                key ={item.unique_id}
                onClick={()=>this.props.getMatchDetail(item.unique_id)} >
              <span className="team1">{item['team-1']}</span>
              <span className="vs">Vs</span>
              <span className="team2">{item['team-2']}</span>
            </li>
            )
         
          })}
        </ul>
      </div>
    )
  }
 
}
export default RecentMatches;