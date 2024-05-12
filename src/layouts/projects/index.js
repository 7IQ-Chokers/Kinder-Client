// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Issuecards from "examples/Cards/Issuecard";

// Overview page components
import Header from "layouts/proposals/components/Header";
import Thread from "layouts/proposals/components/Threads";
import { useLocation, useNavigate } from "react-router-dom";
import UpDownVote from "examples/Cards/UpDownVote";
import { useContext, useEffect, useState } from "react";
import { BACKEND_PROFILE_SERVICE_BASE_URL } from "config/config";
import { UserAuthContext } from "context/UserAuthContext";

function Overview() {
  const location = useLocation();
  const navigation = useNavigate();

  const [project, setProject] = useState(null);
  const { userAuthToken, setUserAuthToken } = useContext(UserAuthContext);

  useEffect(() => {
    if (!location?.state?.id) {
      navigation("/");
    } else {
      (async () => {
        // Get project details from ID
        const response = await fetch(
          // `${BACKEND_PROFILE_SERVICE_BASE_URL}/projects/${location.state.id}`
          `${BACKEND_PROFILE_SERVICE_BASE_URL}/projects/663f6db34e26cfd79a9f9fa5`,
          { headers: { Authorization: `Bearer ${userAuthToken}` } }
        );
        const projectDetails = await response.json();
        setProject(projectDetails.data.project);
      })();
    }
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} xl={12} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <MDBox></MDBox>
            {/* <UpDownVote id={location.state.id} /> */}
            {/* <UpDownVote /> */}
            {project ? (
              <Issuecards
                tags={project.tags}
                title={project.title}
                summary={project.summary}
                description={project.description}
                info={{
                  fullName: "Alec M. Thompson",
                  mobile: "(44) 123 1234 123",
                  email: "alecthompson@mail.com",
                  location: "USA",
                }}
                action={{ route: "/contribute", label: "Invest", tooltip: "Edit Profile" }}
                shadow={false}
              />
            ) : (
              <></>
            )}
            <Divider orientation="vertical" sx={{ mx: 0 }} />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Overview;
