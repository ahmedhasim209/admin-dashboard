import { Alert, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import Header from "../../components/Header";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const currencies = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = () => {
    handleClick();
  };
  return (
    <Box>
      <Header Title="CREATE USER" subTitle="Create a New User Profile" />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            sx={{ flex: 1 }}
            error={Boolean(errors.firstName)}
            helperText={
              errors.firstName
                ? "This field is required & min 3 character."
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            label="First Name"
            variant="filled"
          />
          <TextField
            sx={{ flex: 1 }}
            error={Boolean(errors.lastName)}
            helperText={
              errors.lastName
                ? "This field is required & min 3 character."
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            label="Last Name"
            variant="filled"
          />
        </Stack>
        <TextField
          error={Boolean(errors.email)}
          helperText={
            errors.email ? "Please provide a valid email address." : null
          }
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
          label="Email"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.phone)}
          helperText={
            errors.phone ? "Please provide a valid Phone number." : null
          }
          {...register("phone", {
            required: true,
            pattern: /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g,
          })}
          label="Phone Number"
          variant="filled"
        />
        <TextField label="Adress 1" variant="filled" />
        <TextField label="Adress 2" variant="filled" />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="User"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            create a new user
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}
