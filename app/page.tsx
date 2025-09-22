import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { getContentBySlug } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const aboutContent = getContentBySlug('about-me');

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-8">
          <Image
            src="/ava_prof_cropped.webp"
            alt="Ivan Chernukha"
            width={150}
            height={150}
            priority
            className="mx-auto rounded-full w-[150px] h-[150px] object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hey, I'm Ivan Chernukha.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Let's put AI to do the work :)
        </p>
      </div>

      {/* About Me Section with MDX */}
      {aboutContent && (
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote source={aboutContent.content} />
            </div>
          </div>
        </div>
      )}

      {/* Latest Posts Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 py-12">
            No blog posts yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  );
}