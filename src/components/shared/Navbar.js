"use client";
import logo from "@/assets/logo.png";
import { Button, IconButton, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";

const navItems = [
    {
    route: "Home",
    pathname: '/'
   },
    {
    route: "Pages",
    pathname: '/pages'
   },
    {
    route: "Category",
    pathname: '/category'
   },
    {
    route: "News",
    pathname: '/news'
   },
    {
    route: "About",
    pathname: '/about'
   },
    {
    route: "Contact",
    pathname: '/contact'
   },
];

function Navbar() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Image src={logo} width={100} height={100} alt="Logo"></Image>

          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button  className="text-white">
                {item.route}
                </Button>
              </Link>
            ))}
          </Box>

          <Box>
          <Stack direction="row" sx={{
            "& svg":{
                color: "white"
            }
          }}>
          <IconButton>
          <FacebookIcon></FacebookIcon>
            
          </IconButton>
          <IconButton>
             <GoogleIcon></GoogleIcon>   
          </IconButton>
          <IconButton>
             <YouTubeIcon></YouTubeIcon>  
          </IconButton>
          </Stack>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
