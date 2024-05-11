import { Margin } from "@mui/icons-material";
import { Card, Grid, Input, InputLabel, TextareaAutosize } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";

function AddIssue() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    

  return (
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
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Create A Proposal
                </MDTypography>
              </MDBox>
              <MDBox mt={3}>
                <InputLabel>Title :</InputLabel>
                <Input
                  name="title"
                  fullWidth={true}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                ></Input>
              </MDBox>
              <MDBox pt={3}>
                <MDBox>
                  <InputLabel>Description :</InputLabel>
                  <TextareaAutosize minRows={7} style={{ width: "100%" }}></TextareaAutosize>
                </MDBox>
              </MDBox>
              <MDBox pt={3} mx={3}>
                <MDBox>
                  <InputLabel>Tags :</InputLabel>
                  <TextareaAutosize minRows={7} style={{ width: "100%" }}></TextareaAutosize>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddIssue;
