import { useState } from "react";
import "./App.css";
import data from "./data.json";
import HomePage from "./Components/HomePage";





function App() {
  const [isNew, setIsNew] = useState(true);
  const [filter, setFilter] = useState(data);

  
  // console.log(data.length);
  

  

  return (
    <div className="App">
     { <HomePage setFilter={setFilter} filter={filter} isNew={isNew} data={data}/>}
      
    
     
    </div>
  );
}

export default App;
