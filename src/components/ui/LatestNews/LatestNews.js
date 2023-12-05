import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} width={800} alt="Top News"></Image>
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 py-1 rounded-lg text-white my-5">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </Typography>
            <Typography className="my-3" gutterBottom>
              By-Swdaeb@sharma -December-05/23
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...
              Read More
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        
      <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
          <Image src={topNews2}  width={800} alt='Top News'></Image>
          </CardMedia>
          <CardContent>
          <p className='w-[100px] bg-red-500 px-2 py-1 rounded-lg text-white my-5'>Technology</p>
            <Typography gutterBottom variant="h5" component="div">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </Typography>
            <Typography className='my-3' gutterBottom >
           By-Swdaeb@sharma -December-05/23
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
          <Image src={topNews2}  width={800} alt='Top News'></Image>
          </CardMedia>
          <CardContent>
          <p className='w-[100px] bg-red-500 px-2 py-1 rounded-lg text-white my-5'>Technology</p>
            <Typography gutterBottom variant="h5" component="div">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </Typography>
            <Typography className='my-3' gutterBottom >
           By-Swdaeb@sharma -December-05/23
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
          <Image src={topNews2}  width={800} alt='Top News'></Image>
          </CardMedia>
          <CardContent>
          <p className='w-[100px] bg-red-500 px-2 py-1 rounded-lg text-white my-5'>Technology</p>
            <Typography gutterBottom variant="h5" component="div">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </Typography>
            <Typography className='my-3' gutterBottom >
           By-Swdaeb@sharma -December-05/23
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
          <Image src={topNews2}  width={800} alt='Top News'></Image>
          </CardMedia>
          <CardContent>
          <p className='w-[100px] bg-red-500 px-2 py-1 rounded-lg text-white my-5'>Technology</p>
            <Typography gutterBottom variant="h5" component="div">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </Typography>
            <Typography className='my-3' gutterBottom >
           By-Swdaeb@sharma -December-05/23
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
