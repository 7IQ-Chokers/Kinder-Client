// // prop-types is library for typechecking of props
// import PropTypes from "prop-types";

// // @mui material components
// import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
// import Icon from "@mui/material/Icon";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// function ThreadInfoCard({ color, icon, title, description, value }) {
//   return (
//     <Card>
//       <MDBox p={2} mx={3} display="flex" justifyContent="center">
//         <MDBox
//           display="grid"
//           justifyContent="center"
//           alignItems="center"
//           bgColor={color}
//           color="white"
//           width="4rem"
//           height="4rem"
//           shadow="md"
//           borderRadius="lg"
//           variant="gradient"
//         >
//           <Icon fontSize="default">{icon}</Icon>
//         </MDBox>
//       </MDBox>
//       <MDBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
//         <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
//           {title}
//         </MDTypography>
//         {description && (
//           <MDTypography variant="caption" color="text" fontWeight="regular">
//             {description}
//           </MDTypography>
//         )}
//         {description && !value ? null : <Divider />}
//         {value && (
//           <MDTypography variant="h5" fontWeight="medium">
//             {value}
//           </MDTypography>
//         )}
//       </MDBox>
//     </Card>
//   );
// }

// // Setting default values for the props of DefaultInfoCard
// ThreadInfoCard.defaultProps = {
//   color: "info",
//   value: "",
//   description: "",
// };

// // Typechecking props for the DefaultInfoCard
// ThreadInfoCard.propTypes = {
//   color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
//   icon: PropTypes.node,
//   title: PropTypes.string,
//   description: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

// export default ThreadInfoCard;

import React from 'react';
import { Card, Typography, Divider, Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function ThreadInfoCard({ userName, description, upvotes, downvotes }) {
  return (
    <Card variant="outlined" style={{ padding: '20px', marginBottom: '20px' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>{userName}</Typography>
        <Box display="flex" alignItems="center">
          <IconButton size="small" color="primary">
            <ArrowUpwardIcon />
          </IconButton>
          <Typography variant="body1" style={{ fontWeight: 'bold', marginRight: '10px' }}>{upvotes}</Typography>
          <IconButton size="small" color="secondary">
            <ArrowDownwardIcon />
          </IconButton>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>{downvotes}</Typography>
        </Box>
      </Box>
      <Divider style={{ margin: '10px 0' }} />
      <Typography variant="body1">{description}</Typography>
    </Card>
  );
}

export default ThreadInfoCard;

