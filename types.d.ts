type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};

type BlogPost = {
  id: string;
  title: string;
  date: string;
};
type Posts = {
  id: string;
  title: string;
  date: string;
  content_html?: string;
};

type BlogPosts = {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blogs?: BlogsEntity[];
};

type BlogsEntity = {
  user_id: number;
  title: string;
  content_text: string;
  photo_url: string;
  created_at: string;
  id: number;
  description: string;
  content_html: string;
  category: string;
  updated_at: string;
};
