'use client'
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  Toolbar,
  Divider,
  ListItemButton,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useRouter } from "next/navigation";
import { Timeline } from "@mui/icons-material";
import { Book, LogInIcon, Quote } from "lucide-react";

const DrawerCustom = () => {

  const router = useRouter()
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const username = "Soham"

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
     {isSmallScreen ? (
        <IconButton onClick={toggleDrawer} sx={{ color: 'black', position: 'fixed', top: 10, left: 10 }}>
          <MenuIcon sx={{ color: 'blue' }} />
        </IconButton>
      ) : null}
    <Drawer
    variant={isSmallScreen ? 'temporary' : 'permanent'}
    open={openDrawer}
    onClose={toggleDrawer}
      sx={{
        width: {xs: "60%",sm: "30%", md: "25%", lg: "16%"},
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: {xs: "60%",sm: "30%", md: "25%", lg: "16%"},
          boxSizing: "border-box",
          // backgroundColor: "#f4f4f4",
          padding: "0.5%",
          color: "white",
          backgroundColor: "#0B0D0E",
        },
      }}
    >
      <Toolbar>
          <AccountCircleIcon sx={{ width: 33, height: 33, color: 'wheat' }}/>
          <Typography sx={{ marginLeft: 1, fontSize: 22 }}>
            { username }
          </Typography>
        </Toolbar>
      <Divider sx={{ backgroundColor: 'wheat' }}/>
      <List>
        {
        [
            { text: "HomePage", icon: <HomeIcon />, onClick: () => {router.push("/"); toggleDrawer(); } },
            { text: "Books Page", icon: <Book />, onClick: () => {router.push("/finance-goals"); toggleDrawer(); }},
            { text: "Quotes", icon: <Quote />, onClick: () => {router.push("/articles"); toggleDrawer(); }},
            { text: "Activity", icon: <Timeline />, onClick: () => {router.push("/login"); toggleDrawer(); }},
            { text: "Login", icon: <LogInIcon />, onClick: () => {router.push("/login"); toggleDrawer(); }},
            // { text: "Logout", icon: <Logout />, onClick: () => {
            //   localStorage.removeItem('userCredentialGoal')
            //   setStoreUserData({})
            //   setStoreGoalData({})
            //   toggleDrawer();
            //   router.push("/"); 
            // }},
          ].map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              padding: "8px 16px",
              "&:hover": { backgroundColor: "black" },
              "&.Mui-selected": {
                backgroundColor: "#d0d0d0",
                "&:hover": { backgroundColor: "#c0c0c0" },
              },
              borderRadius: 4,
              marginTop: "5%",
            }}
            onClick={item.onClick}
          >
            <ListItemIcon sx={{ minWidth: 36, color: "white" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>

    </>
  );
};

export default DrawerCustom;
