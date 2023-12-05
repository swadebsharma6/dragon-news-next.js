import { getAllNews } from "@/utilites/getAllNews";
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

const LatestNews = async() => {
  const {data} = await getAllNews();
  console.log(data[0])
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={data[0].thumbnail_url} width={800} height={500} alt="Top News"></Image>
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 py-1 rounded-lg text-white my-5">
              {data[0].category}
            </p>
            <Typography gutterBottom variant="h5" component="div">
            {data[0].title}
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
       {
        data.slice(0, 4).map(news => <Grid key={news._id} item xs={6}>
          <Card>
          <CardActionArea>
            <CardMedia>
            <Image src={news.thumbnail_url}  width={800} height={300} alt='Top News'></Image>
            </CardMedia>
            <CardContent>
            <p className='w-[100px] bg-red-500 px-2 py-1 rounded-lg text-white my-5'>{news.category}</p>
              <Typography gutterBottom variant="h5" component="div">
             {news.title}
              </Typography>
              <Typography className='my-3' gutterBottom >
             By-Swdaeb@sharma -December-05/23
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {news.details.length > 200 ? news.details.slice(0, 200)+'...' : news.details }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </Grid>)
       }
      </Grid>
    </Box>
  );
};

export default LatestNews;
