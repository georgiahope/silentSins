import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import React from "react";
import { useFormControls } from "./ContactFormControls";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10
  }
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#9f3133',
    },
    secondary: {
      main: '#ffff',
    },
  },
});

export const ContactForm = () => {
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  } = useFormControls();

  return (
    <ThemeProvider theme={theme}>
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <TextField
            key={index}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            error={errors[inputFieldValue.name]}
            multiline={inputFieldValue.multiline ?? false}
            fullWidth
            rows={inputFieldValue.rows ?? 1}
            autoComplete="none"
            {...(errors[inputFieldValue.name] && {
              error: true,
              helperText: errors[inputFieldValue.name]
            })}
          />
        );
      })}
      <Button
        variant="contained"
        type="submit"
        color="primary"
        disabled={!formIsValid()}
      >
        Send Message
      </Button>
    </form>
    </ThemeProvider>
  );
};
