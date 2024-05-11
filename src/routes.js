// Material Dashboard 2 React layouts
import Tables from "layouts/tables";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";

// import SignUp from "layouts/authentication/sign-up";
import Proposals from "layouts/proposals";
import Issues from "layouts/issues";
import Projects from "layouts/projects";

import AddIssue from "layouts/addforms/AddIssue";
import AddProject from "layouts/addforms/AddProject";
import AddProposal from "layouts/addforms/AddProposal";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Issues",
    key: "issues",
    icon: <Icon fontSize="small">warning</Icon>,
    route: "/issues",
    component: <Issues />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    route: "/proposals",
    component: <Proposals />,
  },
  {
    route: "/proposals/create",
    component: <AddProposal />,
  },
  {
    route: "/projects/create",
    component: <AddProject />,
  },
  {
    route: "/issues/create",
    component: <AddIssue />,
  },
  {
    route: "/issues",
    component: <Issues />,
  },
  {
    route: "/projects",
    component: <Projects />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/",
    component: <SignIn />,
  },
];

export default routes;
