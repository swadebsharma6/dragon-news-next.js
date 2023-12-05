export const getAllCategories = async()=>{

    const res = await fetch(`https://the-dragon-server-drab.vercel.app/categories`);

    return res.json();
}