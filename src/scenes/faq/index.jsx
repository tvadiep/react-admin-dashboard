import React from "react";
import { Box, useTheme, Accordion, Typography } from "@mui/material";
import { Header } from "../../components/Header";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Question Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Q: What is React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: React is a JavaScript library used for building user interfaces,
            particularly for single-page applications.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Q: What is JSX in React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: JSX is a syntax extension for JavaScript that allows you to write
            HTML-like code within JavaScript. It is used in React to describe
            the structure and appearance of components.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Q: What are React components?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: React components are reusable building blocks that encapsulate
            the logic and UI elements of a user interface. They can be composed
            together to create complex UIs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Q: What is the virtual DOM in React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: The virtual DOM is a lightweight copy of the actual DOM that
            React uses to efficiently update and render components. React
            compares the virtual DOM with the real DOM and applies the necessary
            changes to minimize actual DOM manipulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Q: What is state in React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: State is an object that holds data specific to a component. It
            allows components to manage and update their data independently,
            triggering re-rendering when the state changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Q: What are React hooks?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: React hooks are functions that allow you to use state and other
            React features in functional components. They provide a way to add
            stateful behavior to functional components without using class
            components.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
