import { useRouteError } from "react-router-dom";

import { Box } from "@mui/material";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

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
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Box>
  );
};

export default ErrorPage;
