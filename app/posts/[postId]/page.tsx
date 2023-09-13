import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const posts = await getSortedPostsData(); //deduped!
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = await getSortedPostsData(); //deduped!
  const { postId } = params;

  const postData = posts.find((post) => {
    if (post.id == postId) return true;
    return false;
  });

  if (!postData?.id) {
    return notFound();
  }

  const data = await getPostData(postId);
  const post = data[0];
  if (data !== undefined) {
    return (
      <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0">{post?.title}</h1>
        <p className="mt-0">{post?.date}</p>
        <article>
          <section dangerouslySetInnerHTML={{ __html: post?.content_html! }} />
          <p>
            <Link className="no-underline" href="/">
              ⬅️ Back to Home{" "}
            </Link>
          </p>
        </article>
      </main>
    );
  }
}
