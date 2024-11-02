import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import getPostMetada from '../../../../helper/getPostMetaData';
import React from 'react';

const getPostContent= (slug:string)=>{
    const folder = "markdown/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult= matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetada();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  };

interface BlogPostProps {
    params: Promise<{
        slug: string;
    }>;
}
const dateOptions = {
    weekday:"long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
export default function BlogPost({params}: BlogPostProps){

    const {slug} = React.use(params)
    const post = getPostContent(slug)

    return (
        <div className='p-6'>
            <div className='text-center' >
            <h1 className=' text-3xl text-slate-800 dark:text-teal-500 font-bold'>{post.data.title}</h1>
            <p className='text-slate-500'>{post.data.date.toLocaleDateString("en-US", dateOptions)}</p>
            </div>
            <article className='text-xl prose max-w-none md:prose-lg prose-slate dark:prose-invert my-8'>
                <Markdown>
                    {post.content}
                </Markdown>
            </article>
        </div>
    )
}
// fonts quick sand 
