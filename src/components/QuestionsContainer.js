import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";
import AnsweredQuestions from "./AnsweredQuestions";
import UnansweredQuestions from "./UnansweredQuestions";
import { Grid } from "@mui/material";

export default function QuestionsContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid mt={2} container direction="row" justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box sx={{ border: 1, borderColor: "divider", width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Unanswered Questions" />
              <Tab label="Answered Questions" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <UnansweredQuestions />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AnsweredQuestions />
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}
