import './App.css';
import {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function generateHexColors(n) {
  const str = '0123456789abcdef'
  let colors = [];
  let hexColor = "";
  for(let i = 0; i<n; i++) {
    hexColor = '#';
    for(let i = 0; i<6; i++) {
      hexColor += str[Math.floor(Math.random() * str.length)];
    }
    colors.push(hexColor);
  }
  
  return colors;   
  
}

function Color(props) {
  const [copied, setCopied] = useState(false);
  const refColor = useRef(null);
  const color = props.color;

  function handleCopy(e) {
    const copiedColor = refColor.current.textContent;

    navigator.clipboard.writeText(copiedColor);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    },3000);

  }

  const status = copied ? 'copied' : 'copy';
  


  return (
    <div className={`color-container ${status}`} style ={{
      backgroundColor: color
    }}>
      <h3 ref={refColor} className="color-hex">{color}</h3>
      <i
          style={{
            cursor: 'pointer',
            fontSize: 28,
            color: 'white',
          }}
          class='far fa-clipboard'
          onClick={handleCopy}
        ></i>
    </div>
)
}

function ColorContainers(props) {
  const colors = props.colors;
  console.log(colors);

 

  return (
    <div className="colors-container">
      {colors.map((color, index) => {
        return <Color color={color} key={index}/>
      })}
    </div>
  )
  
}

function GenerateColors(props){
  let colors = generateHexColors(Number(props.numColors));

  return (
    <div>
      <ColorContainers colors={colors}/>
    </div>
  )

}

function App() {
  const[colorNum, setColorNum] = useState(27);
  const ref = useRef(null);

  function generateNumColors(e) {
    e.preventDefault();
    let n = Number.parseInt(ref.current.value);
    n = (Number.isNaN(n) ? 27 : n);
    console.log(n)

    setColorNum(n);

  }
  return (
    <div className="App">
      <header className="hero">
        <h1 className="hero-head">30 Days Of React</h1>
        <h2 className="hero-lead">Hexadecimal Colors</h2>
      </header>
      <main className="main">
        <section className="generate-form">
          <form onSubmit={generateNumColors}>
            <input type="number" ref={ref} className="num-colors" placeholder="Enter number of colors to be generated" min="1" step="1"></input>
            <input type="submit" className="btb-generate"></input>
          </form>
        </section>
        <section className="colors-section">
          <GenerateColors numColors= {colorNum}/>
        </section>
      </main>
      <footer className="footer">
        <small>Made with ❤ Bharati Subramanian</small>
      </footer>
    </div>
  );
}

export default App;
