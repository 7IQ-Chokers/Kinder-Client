// Material Dashboard 2 React layouts
import Tables from "layouts/tables";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";

// import SignUp from "layouts/authentication/sign-up";
import Proposals from "layouts/proposals";
import Issues from "layouts/issues";
import Projects from "layouts/projects";

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
    route: "/proposals",
    component: <Proposals />,
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
