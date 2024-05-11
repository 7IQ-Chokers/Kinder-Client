// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import {problems} from "./dummy"

export default function data() {

  const TableData = ({title}) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  )

  const populateRows = () => {
    let rows = [];
    problems.forEach(problem => {
      let row = {};
      row = {...row,issue:<TableData  title={problem.title} />}
      row = {...row,author:<TableData title={problem.created_by} />}
      row = {...row,location:<TableData title= {problem.location}/>}
      row = {...row,upvotes:<TableData title={problem.upvotes || 0} />}
      row = {...row,downvotes:<TableData title={problem.downvotes || 0} />}
      rows.push(row);
    });
    return rows;
  }

  return {
    
    columns: [
      { Header: "issue", accessor: "issue", width: "45%", align: "left" },
      { Header: "author", accessor: "author", align: "left" },
      { Header: "location", accessor: "location", align: "center" },
      { Header: "upvotes", accessor: "upvotes", align: "center" },
      { Header: "downvotes", accessor: "downvotes", align: "center" },
    ],

    rows: populateRows()
  };
}
