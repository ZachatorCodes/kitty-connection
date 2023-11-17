import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, FormControlLabel, Radio, RadioGroup } from "@mui/material";

function CatUpdateForm({ cat }) {
  const [catObj, setCatObj] = useState({
    name: cat.name,
    age: cat.age,
    sex: cat.sex,
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setCatObj({
      ...catObj,
      [name]: value,
    });
  }

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          required
          variant="filled"
          name="name"
          label="Name"
          value={catObj.name}
          onChange={handleChange}
          sx={{ margin: "5px" }}
        ></TextField>
        <TextField
          required
          variant="filled"
          name="age"
          label="Age"
          value={catObj.age}
          onChange={handleChange}
          sx={{ margin: "5px" }}
        ></TextField>
        <RadioGroup
          required
          row
          name="sex"
          label="Sex"
          value={catObj.sex}
          onChange={handleChange}
          sx={{ margin: "5px", textAlign: "center" }}
        >
          <Container>
            <FormControlLabel value={1} control={<Radio />} label="Male" />
            <FormControlLabel value={2} control={<Radio />} label="Female" />
          </Container>
        </RadioGroup>
      </Box>
    </Container>
  );
}

export default CatUpdateForm;
