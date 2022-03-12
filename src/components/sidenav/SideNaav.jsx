import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentIcon from "@mui/icons-material/Payment";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SelectAutoWidth from "../Select/Select";
import Groups from "../groups/Groups";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "../home/Home";
import ToggleColorMode from "../darkmode/DarkMode";
import Payments from "../payments/Payments";
import Attendance1 from "../Attendance1/Attendance1";
import Groups1 from "../Groups1/Groups1";
import "./SideNav.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #fff 30%, #FFF 90%)",
  },
  title: {
    background: "#F0F2FA",
  },
  bgcolor: { background: "#F0F2FA" },
});

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ background: "#fff", color: "#0061F7", fontWidth: "900" }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon className={classes.title} />
          </IconButton>
          <Typography className="typo" variant="h4" noWrap component="p">
            Xisobot
          </Typography>
          <SelectAutoWidth />
          <ToggleColorMode className="dark__mode" />
          <NotificationsNoneIcon className="bell" />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="drawe__header">
          <AccountBoxIcon className="drawe__header-contact" />
          <p className="drawe__header-p">
            {" "}
            CRM <br />
            PANEL
          </p>
          <IconButton className="IconButton" onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <Box style={{ background: "#2F49D1", height: "100vh", color: "#fff" }}>
          <List>
            <ListItemButton button>
              <NavLink to="/home" className="navlink">
                <HomeIcon style={{ color: "#fff", marginRight: 30 }} />
                Xisobot
              </NavLink>
            </ListItemButton>
            <ListItemButton button>
              <NavLink to="/studentes" className="navlink">
                <SchoolSharpIcon style={{ color: "#fff", marginRight: 30 }} />
                O’quvchilar
              </NavLink>
            </ListItemButton>
            <ListItemButton button>
              <NavLink to="/groups1" className="navlink">
                <GroupsIcon style={{ color: "#fff", marginRight: 30 }} />
                Guruhlar
              </NavLink>
            </ListItemButton>
            <ListItemButton button>
              <NavLink to="/payments" className="navlink">
                <PaymentIcon style={{ color: "#fff", marginRight: 30 }} />
                To’lovlar
              </NavLink>
            </ListItemButton>
            <ListItemButton button>
              <NavLink to="/attendance1" className="navlink">
                <ContactsIcon style={{ color: "#fff", marginRight: 30 }} />
                Davomat
              </NavLink>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups1" element={<Groups1 />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/Attendance1" element={<Attendance1 />} />
        </Routes>
      </div>
    </Box>
  );
}
