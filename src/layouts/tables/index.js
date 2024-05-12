// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import issuesTableData from "layouts/tables/data/issuesTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "context/UserAuthContext";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import { BACKEND_PROJECTS_BASE_URL } from "config/config";

function Tables() {

  const [issues, setIssues] = useState([]);

  const { columns, rows } = issuesTableData(issues);
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const { userAuthToken, setUserAuthToken } = useContext(UserAuthContext);



  useEffect(() => {
    const fetchProblems = async()=>{
      let data = {"location":{"longitude":23.345,"latitude":12.2453},"maxDistanceInMetres":1000}
      let res = await fetch(BACKEND_PROJECTS_BASE_URL+"/problems",{
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+userAuthToken,
        },
        redirect: "follow", 
        body: JSON.stringify(data),
      });
      return res.json();
    }

    let res = fetchProblems();
    if(res.status === 'success'){
      setIssues(res);}

  }, [])


  return userAuthToken ? (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                coloredShadow="dark"
                display="flex"  // Set display to flex
                justifyContent="space-between" // Align items to the right
                alignItems="center" // Align items vertically centered
              >
                <MDTypography variant="h6" color="white">
                  Issues
                </MDTypography>
                <Link to={"/issues/create"}>
                <MDButton variant="outlined" color="light" size="small">Add Issue</MDButton>
                </Link>                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                coloredShadow="dark"
              >
                <MDTypography variant="h6" color="white">
                  Projects
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  ) : (
    <center>Login First!</center>
  );
}

export default Tables;
