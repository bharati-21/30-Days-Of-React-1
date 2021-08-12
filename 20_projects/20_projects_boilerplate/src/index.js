import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export function Cat (props) {
  console.log(props);
  let catImage = props.cat.image.url;
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

function CalculateAverageWeight(props) {
    console.log(props);
    // let weight = Object.values(props.weight.weight);
    // console.log(weight);

  }

class App extends Component {
  state = {
    data: [],
  }

  
  componentDidMount() {
    this.fetchCatData();
  }
  fetchCatData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds?limit=10'
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

  
  
  
  render() {

    let weight = this.state.data;
    let weightProps = {weight: weight};
    console.log(weight);
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div className='cat-wrapper' style={{
            maxWidth: "900px",
            margin: "2rem auto"}}>
          
            {this.state.data.map((cat) => {
              return <Cat cat={cat}></Cat>
            })}
        </div>

        <CalculateAverageWeight weight = {weightProps} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
