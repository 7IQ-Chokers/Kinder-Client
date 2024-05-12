import React, { useState, useEffect, useContext } from "react";
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
import projectsTableData from "layouts/tables/data/projectsTableData";
import { UserAuthContext } from "context/UserAuthContext";
import { useLocation } from "react-router-dom";
import { BACKEND_PROJECTS_BASE_URL } from "config/config";
import UpDownVote from "../../examples/Cards/UpDownVote";

function Overview() {
  const [proposals, setProposals] = useState([]);
  const [issue, setIssue] = useState({});
  const { userAuthToken, setUserAuthToken } = useContext(UserAuthContext);

  const location = useLocation();

  useEffect(() => {
    // Fetch data from API endpoint
    const issueId = location.state.id;

    const fetchProposals = () => {
      fetch(BACKEND_PROJECTS_BASE_URL + "/proposals/forProblem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userAuthToken,
        },
        body: JSON.stringify({ problemId: issueId }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonData) {
          if (jsonData.status === "success") {
            setProposals(jsonData.data.proposals);
          }
        });
    };
    if (userAuthToken) {
      fetchProposals();
    }
  }, [userAuthToken]);

  // Define columns for the table
  const columns = [
    { label: "Proposal", accessor: "Proposal", key: "id" },
    { label: "Author", accessor: "Author", key: "author" },
    { label: "Upvotes", accessor: "Upvotes", key: "upvotes" },
    { label: "Downvotes", accessor: "Downvotes", key: "downvotes" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header>
        <MDBox>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12} xl={12} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <Issuecards
                tags={issue.tags || []}
                description={issue.description}
                title={issue.title}
                action={{
                  route: "/projects/create",
                  id: issue.id,
                  label: "Contribute",
                  tooltip: "Edit Profile",
                }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
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
                    Proposals
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns: columns, rows: proposals }}
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
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
