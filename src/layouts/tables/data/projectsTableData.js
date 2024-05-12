// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import { projects } from "./dummy";
import { Link } from "react-router-dom";
export default function data() {
  
  const Project = ({title,id}) => (
    <Link to={'/projects'} state= {{ id: id}}>
      <MDTypography color={ "dark"} fontWeight="medium" fontSize="medium">{title}</MDTypography>
    </Link>
  )

  const TableData = ({title}) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  )



  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  //TODO: Add icons next to the upvote down vote button just for indication... (later can make them as buttons)
  
  const populateRows = () => {
    let rows = [];
    projects.forEach(project => {
      let row = {};
      row = {...row,project:<Project  title={project.title} id={project.id} />}
      row = {...row,author:<TableData title={project.created_by} />}
      row = {...row,upvotes:<TableData title={project.upvotes || 0} />}
      row = {...row,downvotes:<TableData title={project.downvotes || 0} />}
      rows.push(row);
    });
    return rows;
  }

  return {
    columns: [
      { Header: "projects", accessor: "project", width: "45%", align: "left" },
      { Header: "author", accessor: "author", align: "left" },
      { Header: "upvotes", accessor: "upvotes", align: "center" },
      { Header: "downvotes", accessor: "downvotes", align: "center", Cells: ""},
    ],

    rows: populateRows()
  };
}
