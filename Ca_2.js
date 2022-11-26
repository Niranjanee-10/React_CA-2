
  import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Drops() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const Lime=()=>{
    document.getElementById('box').style.background="lime";
  }
  const Lavender=()=>{
    document.getElementById('box').style.background="lavender";
  }
  const Crimson=()=>{
    document.getElementById('box').style.background="Crimson";
  }
  const Darkblue=()=>{
    document.getElementById('box').style.background="darkblue";
  }
  const Teal=()=>{
    document.getElementById('box').style.background="teal";
  }
  const Purple=()=>{
    document.getElementById('box').style.background="purple";
  }
  

  return (
      <div className="full">
    <h1>CHOOSE A COLOUR</h1>
    <div className="Drop_down">
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color </InputLabel>
        <Select
          sx={{
            "&:hover": {
              "&& fieldset": {
                border: "3px solid black"
              }
            }
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "blue"
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "green"
                }
              }
            }
          }}
          value={age}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={10} onClick={Lime}>Lime</MenuItem>
          <MenuItem value={20} onClick={Lavender}>Lavender</MenuItem>
          <MenuItem value={30} onClick={Crimson}>Crimson</MenuItem>
          <MenuItem value={10} onClick={Darkblue}>Darkblue</MenuItem>
          <MenuItem value={20} onClick={Teal}>Teal</MenuItem>
          <MenuItem value={30} onClick={Purple}>Purple</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div className="box" id="box">

    </div>
    </div>
    </div>
  );
}