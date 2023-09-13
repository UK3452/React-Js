import getFormattedDate from "./getFormattedDate";

export default async function getWikiResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });

  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?" + searchParams
  );
  return response.json();
}

export async function getPosts() {
  const data = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=2"
  );
  const pos = await data.json();
  const content: BlogsEntity[] = pos.blogs;
  const postData: BlogPost[] = content.map((data: any) => {
    const date = getFormattedDate(data.created_at);
    return {
      id: data.user_id,
      title: data.title,
      date: date,
    };
  });
  return postData;
}

export async function getPostDataChunk(id: string) {
  const data = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=2"
  );
  const pos = await data.json();
  const content: BlogsEntity[] = pos.blogs;
  const postData = content.map((data: BlogsEntity) => {
    if (data.user_id.toString() == id) {
      const date = getFormattedDate(data.created_at);
      const post: Posts = {
        id: data.user_id.toString(),
        title: data.title,
        date: date,
        content_html: data.content_html,
      };
      return post;
    }
  });
  const datas = postData.filter(function (element) {
    return element !== undefined;
  });

  return datas;
}
