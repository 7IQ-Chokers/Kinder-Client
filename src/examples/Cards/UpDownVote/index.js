// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import { useContext } from "react";
import { UserAuthContext } from "context/UserAuthContext";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function UpDownVote({ id }) {
  const { userAuthToken, setUserAuthToken } = useContext(UserAuthContext);

  const { size } = typography;

  return (
    <Card>
      <MDBox position="relative" borderRadius="lg" mt={2} mx={4}>
        <p>
          <FaChevronUp />
          <h1 style={{ fontSize: 13 }}>26</h1>
        </p>
        <div>
          <FaChevronDown />
        </div>
      </MDBox>
    </Card>
  );
}

export default UpDownVote;
