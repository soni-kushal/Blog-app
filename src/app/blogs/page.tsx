import { PostMetaData } from "../../../helper/getPostMetaData";
import BlogCard from "../../components/BlogCard";
import getPostMetada from "../../../helper/getPostMetaData";

export default function Home() {
  const postList = getPostMetada();
  const blogList = postList.map((post: PostMetaData) => (
    <BlogCard key={post.slug} {...post} />
  ));
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1 w-max-4xl">
      {blogList}
    </div>
  );
}
