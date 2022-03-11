import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Select.css"
export default function SelectAutoWidth() {
  const [age, setAge] = React.useState("UZ");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="select">
      <Select
        labelId='demo-simple-select-autowidth-label'
        id='demo-simple-select-autowidth'
        onChange={handleChange} 
        value={age}
        >
        <MenuItem value="UZ">UZ</MenuItem>
        <MenuItem value={21}>EN</MenuItem>
        <MenuItem value={22}>RU</MenuItem>
      </Select>
    </div>
  );
}
