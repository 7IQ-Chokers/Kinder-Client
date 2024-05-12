// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function SimpleBlogCard({ image, title, description, action, tags}) {
  const { size } = typography;
  const rendertag = tags.map((tagName, index) => (
    <MDBox
      key={index}
      fontSize={size.lg}
      color={colors.grey['500']}
      pr={1}
      pl={0.5}
      lineHeight={1}
      mb={1} // Add margin bottom to create space between tags
    >
      {tagName}
    </MDBox>
  ));
  return (
    <Card>
      <MDBox position="relative" borderRadius="lg" mt={-3} mx={2}>
        { image && < MDBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="relative"
          zIndex={1}
        />}
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="3%"
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MDBox>
      <MDBox p={3}>
        <MDTypography display="inline" variant="h3" textTransform="capitalize" fontWeight="bold">
          {title}
        </MDTypography>
        <MDBox mt={2} mb={3}>
          <MDTypography variant="body2" component="p" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox display="flex" flexWrap="wrap">
          {rendertag}
        </MDBox>
        {action && ( action.type === "external" ? (
          <Link to={action.route} state= {{ id: action.id}} target="_blank" rel="noopener noreferrer">
            <MDButton color={action.color ? action.color : "dark"}>{action.label}</MDButton>
          </Link>
        ) : (
          <Link to={action.route} state= {{ id: action.id}}>
            <MDButton color={action.color ? action.color : "dark"}>{action.label}</MDButton>
          </Link>
        ))}
      </MDBox>
    </Card>
  );
}

export default SimpleBlogCard;
