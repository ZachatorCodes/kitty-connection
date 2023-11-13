import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, Divider } from "@mui/material";

function Login() {
  return (
    <div className="login">
      <Box>
        <Card>
          <TextField required variant="filled" label="Username" sx={{margin: "10px"}}></TextField>
          <Divider/>
          <TextField required variant="filled" label="Password" sx={{margin: "10px"}}></TextField>
        </Card>
      </Box>
    </div>
  );
}

export default Login;
