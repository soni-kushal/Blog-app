import Link from "next/link";
import { PostMetaData } from "../../helper/getPostMetaData";

export default function BlogCard(post: PostMetaData) {
  return (
    <Link
    href={`/blogs/${post.slug}`}
     className="z-10 group p-4 rounded-sm bg-slate-100 hover:shadow-md bg-opacity-80 ">

      <p className=" text-sm text-slate-600">{post.date.toDateString()}</p>
      <h2
        className=" text-lg  
         hover:text-slate-700 
        font-semibold group-hover:font-bold "
      >
        {post.title}
      </h2>
      <p>{post.description}</p>
    </Link>
  );
}
