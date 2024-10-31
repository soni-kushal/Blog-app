import Link from "next/link";
import { PostMetaData } from "../../helper/getPostMetaData";

export default function BlogCard(post: PostMetaData) {
  return (
    <div className="z-10 group p-4 rounded-sm bg-slate-100 hover:shadow-md bg-opacity-80 ">
      <p className=" text-sm text-slate-600">{post.date.toDateString()}</p>
      <Link
        href={`/blogs/${post.slug}`}
        className=" text-lg  
         hover:text-slate-700 
        font-semibold group-hover:font-bold "
      >
        {post.title}
      </Link>
      <p>{post.description}</p>
    </div>
  );
}
