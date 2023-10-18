import React, { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="  w-full   bord  ">
        <div className=" h-screen flex items-center justify-center">
          <div className="container md:max-w-screen-md p-3 mx-auto  ">
            <div className=" px-5 py-10 border shadow-lg border-gray-400 rounded-md">
              <h1 className="font-karla font-bold text-2xl text-center mb-12">
                SIGN UP
              </h1>
              <form action="" className="flex gap-y-5 flex-col ">
                <div className="flex items-center justify-between">
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="username"
                    placeholder="username"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <TextField
                    helperText=" "
                    label="email"
                    placeholder="email"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <FormControl style={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Checkbox size="small" defaultChecked color="primary" />
                    <p className="font-karla text-sm md:text-base">
                      i agree to the royal services
                    </p>
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-10  ">
                  <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-2xl w-full sm:w-2/3 text-white font-karla hover:bg-green-900 duration-300">
                    signup
                  </button>
                  <div to="#" className="font-karla text-sm md:text-base">
                    already a member?
                    <Link to="/login">
                      <strong className="ml-2">Login Here</strong>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
