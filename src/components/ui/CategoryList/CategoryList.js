
import { getAllCategories } from "@/utilites/getAllCategory";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async() => {
    const {data: allCategories} = await getAllCategories();
    console.log(allCategories)
    return (
        <Box className="mt-5 bg-orange-300 p-5 rounded">
            <Typography textAlign='center' variant="h6"> Category</Typography>
            <Divider></Divider>
            <Stack rowGap={1} sx={{mt:2.5}}>
                {
                    allCategories.map(category => (
                        <Button variant="outlined" key={category._id}>
                            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
                        </Button>
                    ))
                }
            
            </Stack>
        </Box>
    );
};

export default CategoryList;