import { getSingleNews } from "@/utilites/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  console.log(news);

  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              width={800}
              height={500}
              alt="News"
            ></Image>
            <Grid container spacing={2} className="mt-3">
            <Grid item lg={6}>
              <Image src={news.thumbnail_url} width={800} height={600} alt="News"></Image>
            </Grid>
            <Grid item lg={6}>
            <Image src={news.thumbnail_url} width={800} height={500} alt="News"></Image>
            </Grid>
          </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5">{news.title}</Typography>
            <Box sx={{
                display:"flex",
                gap:3,
                alignItems:"center"
            }}>
            <Avatar alt="Author" src={news.author.img} />
            <Typography>By @{news.author.name}</Typography>
            <Typography>published:{news.author.published_date}</Typography>
            </Box>
            <Typography style={{
                textAlign:"justify",
                whiteSpace:'pre-line',
            }}>{news.details}</Typography>

            <Typography variant="h5">
            ``The implications of this breakthrough are immense, as it could lead to the development of new algorithms that address complex problems in areas such as drug discovery and climate modeling.
            </Typography>
            <Typography>~@swadebsharma</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;
