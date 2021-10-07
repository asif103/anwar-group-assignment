import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormHelperText,
  RadioGroup,
  Radio,
  Button,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
  Hidden,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowCPassword = () => setShowCPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showCPassword);
  const handleMouseDownCPassword = () => setShowCPassword(!showCPassword);
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setSuccess(true);
    console.log({ ...data, selectedDate });

    localStorage.setItem("regData", JSON.stringify({ ...data, selectedDate }));
  };
  console.log(errors);
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          position: "fixed",
        }}
      >
        <Hidden mdDown>
          <div
            style={{
              position: "fixed",
            }}
          >
            <img
              src="https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-10/ASpot_Register.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </Hidden>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: "rgba(255,255,255, 0.6)",
          zIndex: 1,
          padding: "15px 0",
        }}
      >
        <Typography variant="h4">Registration form</Typography>

        {success && (
          <Alert variant="filled" severity="success">
            Successfully Registered
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("fname", { required: "First Name is required" })}
            name="fname"
            label="First Name*"
            margin="normal"
            variant="outlined"
            error={Boolean(errors.fname)}
            helperText={errors.fname?.message}
            style={{ width: "85%" }}
          />
          <TextField
            {...register("lname", { required: "Last Name is required" })}
            name="lname"
            label="Last Name*"
            margin="normal"
            variant="outlined"
            error={Boolean(errors.lname)}
            helperText={errors.lname?.message}
            style={{ width: "85%" }}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              style={{ width: "85%" }}
              autoOk
              className={classes.date}
              color="primary"
              variant="inline"
              format="MM/dd/yyyy"
              label="Start date"
              margin="normal"
              value={selectedDate}
              onChange={(date, value) => setSelectedDate(value)}
              KeyboardButtonProps={{
                "aria-label": "Date of Birth",
              }}
            />
          </MuiPickersUtilsProvider>

          <FormControl style={{ textAlign: "center" }}>
            <FormLabel>Choose Your Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    {...register("gender", {
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    {...register("gender", {
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    {...register("gender", {
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Other"
              />
            </RadioGroup>
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl>
          <TextField
            {...register("email", { required: "Email is required" })}
            name="email"
            label="Email Address*"
            margin="normal"
            variant="outlined"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            style={{ width: "85%" }}
          />

          <TextField
            {...register("phone", { required: "Pone number is required" })}
            name="phone"
            label="Personal Phone*"
            margin="normal"
            variant="outlined"
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
            style={{ width: "85%" }}
          />
          <TextField
            {...register("fatherName", {
              required: "Fathers Name is required",
            })}
            name="fatherName"
            label="Fathers Name*"
            margin="normal"
            variant="outlined"
            error={Boolean(errors.fatherName)}
            helperText={errors.fatherName?.message}
            style={{ width: "85%" }}
          />

          <TextField
            {...register("motherName", {
              required: "Mothers Name is required",
            })}
            name="motherName"
            label="Mothers Name*"
            margin="normal"
            variant="outlined"
            error={Boolean(errors.motherName)}
            helperText={errors.motherName?.message}
            style={{ width: "85%" }}
          />
          <TextField
            {...register("userName", { required: "Username is required" })}
            name="userName"
            label="Username*"
            margin="normal"
            variant="outlined"
            error={Boolean(errors.userName)}
            helperText={errors.userName?.message}
            style={{ width: "85%" }}
          />

          <TextField
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            name="password"
            style={{ width: "85%" }}
            type={showPassword ? "text" : "password"}
            label="Password*"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="Cpassword"
            name="Cpassword"
            style={{ width: "85%" }}
            {...register("Cpassword", {
              required: "This field is required",
              validate: (value) =>
                value == watch("password") || "The passwords do not match",
            })}
            type={showCPassword ? "text" : "password"}
            label="Confirm Password*"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            error={Boolean(errors.Cpassword)}
            helperText={errors.Cpassword?.message}
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowCPassword}
                    onMouseDown={handleMouseDownCPassword}
                  >
                    {showCPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div>
            <Button variant="contained" color="primary" type="submit">
              create new account
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default Registration;
