import React from 'react'
import './Card.css'
const Card = ({data}) => {
    return (
        <div className="card">
        <div className="totalcases">
            <h2>Total Cases</h2>
            <h3>{data.total}</h3>
        </div>
          <div className="active">
              <h2>Active Cases</h2>
              <h3>{data.active}</h3>
          </div>
          <div className="recovered">
              <h2>Recovered</h2>
              <h3>{data.recovered}</h3>
          </div>
          <div className="deaths">
              <h2>Deaths</h2>
              <h3>{data.deaths}</h3></div>  
        </div>
    )
}

export default Card
