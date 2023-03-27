import SmallBoxes from './components/SmallBoxes';
import Btn from './components/Btn';
import {useState} from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const btnContent = ['Red', 'Green', 'Blue', 'Add', 'Delete', 'Reset'];

  const handleDelete = () =>{
    const temp = [...boxes];
    temp.splice(parseInt(Math.random() * temp.length), 1);
    setBoxes(temp);
  }
  const handleAdd = () =>{
    const code = '0123456789abcdef';
    let colorCode = '#';
    for(let i = 0; i < 6; i++){
      colorCode += code[parseInt(Math.random() * code.length)];
    }
    setBoxes([...boxes, colorCode]);
  }

  const handleReset = () =>{
    setBoxes([]);
    setBgColor('#fff');
  }

  const handleClick = color =>{
    if(color === 'Add'){
      handleAdd();
    }else if(color === 'Delete'){
      handleDelete();
    }else if(color === 'Reset'){
      handleReset();
    }else{
      setBgColor(color);
    }
  }
  return (
    <div className="App">
      <div style={{backgroundColor: `${bgColor}`, display: 'flex', flexWrap: 'wrap'}} className="box">
        {
          boxes.map(color => <SmallBoxes key={color} color={color} />)
        }
      </div>
      <div className="btns">
        {
          btnContent.map(color => <Btn key={color} onClick={handleClick}>{color}</Btn>)
        }
      </div>
    </div>
  );
}

export default App;
