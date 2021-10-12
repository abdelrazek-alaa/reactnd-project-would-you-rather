import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { Box } from "@mui/system";

export default function ErrorPage() {
  return (
    <Grid mt={2} container item direction="row" justifyContent="center">
      <Card
        sx={{
          border: 1,
          borderColor: "divider",
          width: { xs: "90%", md: "35%" },
        }}
      >
        <CardContent>
          <Box sx={{ textAlign: "center" }}>
            <WarningIcon fontSize="large" color="error" />
            <Typography variant="h6" gutterBottom>
              404
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Page Not Found!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              The Question you are looking for Doesn't Exist!
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
