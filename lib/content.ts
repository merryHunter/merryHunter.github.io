import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentData {
  title: string;
  subtitle?: string;
  content: string;
  [key: string]: any;
}

export function getContentBySlug(slug: string): ContentData | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      content,
      title: data.title || '',
      subtitle: data.subtitle || '',
      ...data,
    } as ContentData;
  } catch (error) {
    console.error(`Error reading content for ${slug}:`, error);
    return null;
  }
}