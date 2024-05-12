import { Margin } from "@mui/icons-material";
import { Card, Grid, Input, InputLabel, TextareaAutosize } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TagsInput from "examples/TagsInput";
import React, { useState } from "react";

function AddIssue() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState([])
    

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card mb={3}>
              <MDBox
                mx={3}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Create A Issue
                </MDTypography>
              </MDBox>
              <MDBox mt={3} mx={3}>
                <InputLabel>Title :</InputLabel>
                <Input
                  name="title"
                  fullWidth={true}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                ></Input>
              </MDBox>
              <MDBox pt={3} mx={3}>
                <MDBox>
                  <InputLabel>Description :</InputLabel>
                  <TextareaAutosize minRows={7} style={{ width: "100%", borderRadius:"5px" }}></TextareaAutosize>
                </MDBox>
              </MDBox>
              <MDBox pt={3} mx={3}>
                <MDBox>
                  <InputLabel>Tags :</InputLabel>
                  <TagsInput tags={tags} setTags={setTags}></TagsInput>
                </MDBox>
              </MDBox>
              <MDBox pt={3} mx={3} mb={3}>
                <MDButton color='dark'>
                  Create Issue
                </MDButton>
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
