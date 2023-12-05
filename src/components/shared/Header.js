import logo from '@/assets/The Dragon News.png';
import { showCurrentDateTime } from '@/utilites/getCurrentdate';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';


const Header = () => {
    const currentDate = showCurrentDateTime();
    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={logo} width={500} height={500} alt='Heading Logo' className='mx-auto'></Image>
                <Typography className='my-3' textAlign='center' variant="body1" color='gray'>
                Journalism Without Fear or Favour
          </Typography>
                <Typography textAlign='center' >
              {currentDate}
          </Typography>
            </Container>
        </Box>
    );
};

export default Header;