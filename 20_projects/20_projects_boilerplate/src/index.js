import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export function Cat (props) {
  console.log(props.cat.image.url);
  let catImage = props.cat.image["url"];
  return (
    <>
      <div className="cat-about" style= {{
        margin: "1rem 1rem 2rem 1rem",
        border: "1px solid #333",
        padding: "1rem"
      }}>
        <img src={catImage} style={{width: "100%"}}></img>
        <p className="cat-name"><span style={{fontWeight: "bold"}}>Name: </span>{props.cat.name}</p>
        <p className="cat-temperament"><span style={{fontWeight: "bold"}}>Temperament: </span>{props.cat.temperament}</p>
        <p className="cat-life-span"><span style={{fontWeight: "bold"}}>Life Span: </span>{props.cat.life_span} years</p>
        <p className="cat-weight"><span style={{fontWeight: "bold"}}>Weight: </span>{props.cat.weight.metric} kg</p>
        <p className="cat-description"><span style={{fontWeight: "bold"}}>Description: </span>{props.cat.description}</p>
        </div>
    </>
  );
  // return <p>{catImage}</p>
  }

class CalculateAverageWeight extends React.Component  {  
    constructor(props) {
    super(props);
    this.state = {
      weight: props.weight
    }
  }
  render() {
    console.log(this.props);
    return(
      console.log(this.state.weight.split(" - "))
    )
  }
}

class App extends Component {
  state = {
    data: [],
  }

  
  componentDidMount() {
    this.fetchCatData();
  }
  fetchCatData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds/?limit=10';
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
       
      })
    } catch (error) {
      console.log(error)
    }
  }

  calculateAverage() {
    let weight = this.state.data.map(cat => {
      let min = Number(cat.weight.metric.split(" - ")[0]);
      let max = Number(cat.weight.metric.split(" - ")[1]);

      return min+max/2;
    });

    console.log(weight);

    let totalWeight = 0;
    weight.forEach(w => {
      totalWeight+=w;
    })
  return totalWeight/weight.length;
  } 
  
  calculateLifeSpan() {
    let lifeSpan = this.state.data.map(cat => {
      let min = Number(cat.life_span.split(" - ")[0]);
      let max = Number(cat.life_span.split(" - ")[1]);

      return min+max/2;
    })
    let totalLifeSpan = 0;
    lifeSpan.forEach(l => {
      totalLifeSpan+=l;
    })
  return totalLifeSpan/lifeSpan.length; 
  }
  
  render() {

    let weight = this.state.data;
    let weightProps = {weight: weight};
    console.log(weight);
    return (
      <div className='App' style={{textAlign: 'center'}}>
        <h1>React Component Life Cycle</h1>
          <div style={{textAlign: "Center"}}>
            <h2>{this.calculateAverage()}</h2>
            <h2>{this.calculateLifeSpan()}</h2>
          </div>
        <h1>Calling API</h1>
        <div className='cat-wrapper' style={{
            maxWidth: "900px",
            margin: "2rem auto"}}>
            

            {this.state.data.map((cat) => {
              return <Cat cat={cat}></Cat>
            })}

            
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
