// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import Issuecards from "examples/Cards/Issuecard";
import DataTable from "examples/Tables/DataTable";

// Overview page components
import Header from "layouts/issues/components/Header";
import Thread from "layouts/issues/components/Threads";

function Overview() {
  const { columns: pColumns, rows: pRows } = projectsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header>
        <MDBox>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12} xl={12} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <Issuecards
                tags={["blah", "hey"]}
                description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
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
            <Grid item xs={12} md={12} xl={12}>
              {" "}
              {/* Ensure the Thread component spans the full width */}
              <Thread sx={{ width: "100%" }} />
              {/* Set width to 100% to cover the full width */}
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
