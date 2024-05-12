import { useState, useContext, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Modal from '@mui/material/Modal';
import Switch from "@mui/material/Switch";
import MDButton from "components/MDButton";
import { Box, CircularProgress } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { BACKEND_PROJECTS_BASE_URL } from "config/config";
import { UserAuthContext } from "context/UserAuthContext";
import { BACKEND_USER_SERVICE_BASE_URL } from "config/config";
import Issuecards from "examples/Cards/Issuecard";
import {
  useMaterialUIController,
} from "context";


function PlatformSettings({ isInvestor, setIsInvestor }) {
  const { userAuthToken, setUserAuthToken } = useContext(UserAuthContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const [projects, setProjects] = useState([]);
  const {
    darkMode
  } = controller;

  const handleInvestor = async () => {
    setIsInvestor(!isInvestor);

    let res = await fetch(BACKEND_USER_SERVICE_BASE_URL + "/user/protected/toggleisinvestor", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + userAuthToken,
      },
    })

    return res;
  }

  const getProjects = async() => {
    setLoading(true);
    let res = await fetch(BACKEND_PROJECTS_BASE_URL + "/projects/investor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + userAuthToken,
      },
    });
    if(res.status === 200 && res.data) {
      setProjects(res.data["projects"]);
      setLoading(false);
      setShow(true);
    }
  }


  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Platform settings
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </MDTypography>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={isInvestor} onChange={handleInvestor} />
          </MDBox>
          <MDTypography variant="button" fontWeight="regular" color="text">
            Investor
          </MDTypography>
          {isInvestor && (<MDButton
            onClick={() => getProjects()}
            color={darkMode ? "light" : "dark"}
            variant="outlined"
            width="60%"
            style={{ marginLeft: "10%" }}
          >
            {!loading ? "Show Recommendations" : (
              <CircularProgress />
            )}
          </MDButton>)}
        </MDBox>
        <Modal
          open={show}
          onClose={() => setShow(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ width: 700, background: "white", margin: "auto", marginTop: "10%", borderRadius: 4, padding: "2vw" }}>
            {
              projects && projects.length > 0 && projects.map(project => (
                <Issuecards
                  tags = {project.tags}
                  title= {project.title}
                  description= {project.description}
                  info={{
                    fullName: project.createdBy.name,
                    mobile: project.createdBy.phone,
                    email: project.createdBy.email,
                    location: "",
                  }}
                action={{ route: "/contribute", label: "Contribute", tooltip: "Edit Profile" }}
                shadow={false}
              />
              ))
            }
            
          </Box>
        </Modal>

        {/* <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </MDTypography>
          </MDBox>
        </MDBox> */}
        {/* <MDBox mt={3}>
          <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            application
          </MDTypography>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </MDTypography>
          </MDBox>
        </MDBox> */}
      </MDBox>

    </Card>
  );
}

export default PlatformSettings;
