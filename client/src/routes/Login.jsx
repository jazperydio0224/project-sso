import { Box } from "@mui/material";

import SignIn from "../components/login/SignIn";

const Login = () => {
  return (
    <Box
      id="error-page"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignIn />
    </Box>
  );
};

export default Login;
