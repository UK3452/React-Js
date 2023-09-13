// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";
import { getPostDataChunk, getPosts } from "./getWikiResults";
import ListItem from "@/app/components/ListItem";

// const postsDirectory = path.join(process.cwd(), "blogposts");

export async function getSortedPostsData() {
  const data: Promise<BlogPost[]> = getPosts();
  const posts = await data;
  const postData = posts.map((data) => {
    const blogPost = {
      id: data.id,
      title: data.title,
      date: data.date,
    };
    return blogPost;
  });
  return postData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getSortedPostsList() {
  const sortedPost = await getSortedPostsData();
  return sortedPost;
}

export async function getPostData(id: string) {
  const posts = getPostDataChunk(id);
  const response = await posts;
  const post = response[0];
  const htmlContent = post?.content_html?.toString();
  const data = {
    id,
    title: post?.title,
    date: post?.date,
    content_html: htmlContent,
  };
  return data;
}

// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf-8");

//   const matterResult = matter(fileContents);

//   const processedContent = await remark()
//   .use(html)
//   .process(matterResult.content);

//   const contentHtml = processedContent.toString();

//   const blogPostWithHTML: BlogPost & { contentHtml: string } = {
//     id,
//     title: matterResult.data.title,
//     date: matterResult.data.date,
//     contentHtml,
//   };
//   return blogPostWithHTML;
// }

// export async function getSortedPostsData() {
//   const postsData = await getPosts();
//   const fileNames = fs.readdirSync(postsDirectory);
//   console.log(postsData)
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, "");

//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf-8");

//     const matterResult = matter(fileContents);

//     const blogPost: BlogPost = {
//       id,
//       title: matterResult.data.title,
//       date: matterResult.data.date,
//     };
//     return blogPost;
//   });
//   return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
// }
