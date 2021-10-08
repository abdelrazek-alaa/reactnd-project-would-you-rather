import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";
import AnsweredQuestions from "./AnsweredQuestions";
import UnansweredQuestions from "./UnansweredQuestions";

export default function QuestionsContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
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
  );
}
