import sendOtpEmail from "controllers/sendOtpEmail";
import { useContext, useEffect, useRef, useState } from "react";

// react-router-dom components
import { Link, useLocation, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import submitOtp from "controllers/submitOtp";
import { UserAuthContext } from "context/UserAuthContext";
import { LocationContext } from "context/LocationContext";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [otpStage, setOtpStage] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [userLocation, setLocation] = useState("");
  const [error, setError] = useState(null);
  const { userAuthToken, setUserAuthToken } = useContext(UserAuthContext);
  const { locationCoords, setLocationCoords } = useContext(LocationContext);


  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationCoords({
          latitude:"34.0522",
          longitude:"-118.2437" 
        });
      },
      (error) => {
        setError(`Error retrieving location: ${error.message}`);
      }
    );
  };

  const navigate = useNavigate();

  useEffect(() => {
    getLocation()
    // If user already loggedin, goto dashboard
    if (userAuthToken) {
      navigate("/dashboard");
    }
  }, []);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            ConnectNSolve
          </MDTypography>
          <MDTypography variant="h5" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox
            component="form"
            role="form"
            onSubmit={(e) => {
              e.preventDefault();
              setOtpStage(true);
              sendOtpEmail(userEmail);
            }}
          >
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                disabled={otpStage}
              />
            </MDBox>

            {otpStage ? (
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Enter OTP"
                  fullWidth
                  value={userOtp}
                  onChange={(e) => {
                    setUserOtp(e.target.value);
                  }}
                />
              </MDBox>
            ) : (
              <></>
            )}

            {!otpStage ? (
              <MDBox
                mt={4}
                mb={1}
                onClick={() => {
                  setOtpStage(true);
                  sendOtpEmail(userEmail);
                }}
              >
                <MDButton variant="gradient" color="info" fullWidth>
                  sign in
                </MDButton>
              </MDBox>
            ) : (
              <></>
            )}
            {otpStage ? (
              <MDBox
                mt={4}
                mb={1}
                onClick={async () => {
                  const jwt = await submitOtp(userEmail, userOtp);
                  if (jwt) {
                    window.localStorage.setItem("userAuthToken", jwt);
                    setUserAuthToken(jwt);
                    navigate("/dashboard", { replace: true });
                  }
                }}
              >
                <MDButton variant="gradient" color="info" fullWidth>
                  submit otp
                </MDButton>
              </MDBox>
            ) : (
              <></>
            )}
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
