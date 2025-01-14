import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

import Photo from "./Components/Photo";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=HQWzeXAazx1yKnF4QzMZLhfuD45Pf3tt2oHl9qop")
.then(res => { 
  setData(res.data);
}).catch(err => {
  console.log(err)
}, [])

  })
  return (
    <div className="App">
      {data && <Photo photo={data} />}
    </div>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY