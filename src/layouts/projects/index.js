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
import { useLocation } from "react-router-dom";
import UpDownVote from "examples/Cards/UpDownVote";
import { useEffect, useState } from "react";

function Overview() {
  const location = useLocation();

  const [project, setProject] = useState(null);

  useEffect(async () => {
    // Get project details from ID
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header>
        <MDBox>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} xl={12} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <MDBox></MDBox>
              {/* <UpDownVote id={location.state.id} /> */}
              <UpDownVote />
              <Issuecards
                tags={["blah", "hey"]}
                // title="profile information"
                description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  fullName: "Alec M. Thompson",
                  mobile: "(44) 123 1234 123",
                  email: "alecthompson@mail.com",
                  location: "USA",
                }}
                action={{ route: "/contribute", label: "Contribute", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
