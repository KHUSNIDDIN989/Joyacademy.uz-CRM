import * as React from "react";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function CustomizedSelects() {
  const [age, setAge] = React.useState("UZ");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="position-relative">
      <FormControl className="select" sx={{ m: 1 }} variant="standard">
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
        >
          <option value={10}>UZ</option>
          <option value={20}>EN</option>
          <option value={30}>RU</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}



