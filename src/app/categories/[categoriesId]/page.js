import { getCategoryNews } from "@/utilites/getCategoryNews";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async({params, searchParams}) => {

    const {data} = await getCategoryNews(searchParams.category);
    console.log(data)

    return (
        <div className="my-5">
            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           {
            data.map(news =>  <Grid key ={news._id} item xs={6}>
               <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
               <Card>
               <CardActionArea>
                 <CardMedia sx={{
                  " & img ": {
                   width: '100%',
                   height:'250px'
                  }
                 }}>
                 <Image src={news.thumbnail_url} height={200} width={800} alt="Image"></Image>
                 </CardMedia>
                 <CardContent>
                 <span className='w-[100px] bg-red-500 px-2 py-1  rounded-lg text-white my-5'>{news.category}</span>
                   <Typography className='my-3' gutterBottom variant="h5" component="div">
                   {news.title.length > 25 ? news.title.slice(0,25)+ '...' : news.length}
                   </Typography>
                   <Typography className='my-3' gutterBottom >
                 {news.author.name} ------ {news.author.published_date}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                  {news.details.length > 200 ? news.details.slice(0, 200)+'...' : news.details }
                   </Typography>
                 </CardContent>
               </CardActionArea>
             </Card>
               </Link>
                </Grid> )
           }
          </Grid>
        </div>
    );
};

export default DynamicNewsPage;