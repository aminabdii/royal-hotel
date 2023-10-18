import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("1234");
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function submitHandler(e) {
    e.preventDefault();
    if (password && email) login(password, email);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="container md:max-w-screen-md p-3 mx-auto  ">
        <div className=" px-5 py-10 border shadow-lg border-gray-400 rounded-md">
          <h1 className="font-karla font-bold text-2xl text-center mb-12">
            lOGIN
          </h1>
          <form
            onSubmit={submitHandler}
            action=""
            className="flex gap-y-5 flex-col "
          >
            <FormControl style={{ width: "100%" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <div className="flex items-center justify-between">
              <FormControl style={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                <p className="font-karla text-sm md:text-base">remember me</p>
              </span>
              <Link className="font-karla font-thin text-sm md:text-base">
                forget password?
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-10  ">
              <button className=" bg-gradient-to-r from-cyan-500 to-blue-500  p-2 rounded-2xl w-full sm:w-2/3 text-white font-karla hover:bg-green-900 duration-300">
                login
              </button>
              <div className="text-center">
                <div to="#" className="font-karla text-sm md:text-base">
                  Don`t have an account ?
                  <Link to="/signup">
                    <strong>Register</strong>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
