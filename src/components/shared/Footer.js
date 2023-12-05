import { Box, Button, Container, IconButton, Typography } from "@mui/material";
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";
const Footer = () => {
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
    return (
        <Box className="bg-black px-2 py-10" sx={{
            "& svg":{
                color: "white"
            }
          }}>
            <Container>
            <Box className="w-full text-center">
         
            <IconButton>
            <FacebookIcon></FacebookIcon>
              
            </IconButton>
            <IconButton>
               <GoogleIcon></GoogleIcon>   
            </IconButton>
            <IconButton>
               <YouTubeIcon></YouTubeIcon>  
            </IconButton>
        
            </Box>
            <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button  className="text-white">
                {item.route}
                </Button>
              </Link>
            ))}
          </Box>
          <Typography textAlign='center' variant="body1" color='gray'>
                @2023 the dragon news news, design By Swadeb@sharma
          </Typography>
            </Container>
        </Box>
      
    );
};

export default Footer;