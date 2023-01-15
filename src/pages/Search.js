import { useState } from 'react';
import { useNavigate } from 'react-router';

const Search = () => {
    const [runner, setRunner] = useState("");
        
    let navigate = useNavigate();
    
    function handleClick() {
      navigate('/marathons?runner='+runner)
    }
    const mystyle = {
        display:"flex",
        flexDirection:"row",
        justifyContent: "left",
        alignItems: "center"
      };

      return (
        <div style={mystyle}>
             <label>search your record:</label>
             <input
              placeholder="your name"
              name="runner" 
              type="text" 
              value={runner||""}
              onChange={(e) => setRunner(e.target.value)}
              />
              <input type="button" value="Search" onClick={handleClick}/>
        </div>
      )
  };
  
  export default Search;