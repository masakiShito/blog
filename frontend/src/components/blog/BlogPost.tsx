import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlogPost as IBlogPost } from '../../types';


interface Post {
  id: number;
  title: string;
  content: string;
  category: {
    id: number;
    name: string;
  };
  tags: Array<{
    id: number;
    name: string;
  }>;
  created_at: string;
}

const BlogPost: React.FC = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${postId}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!post) {
    return <div className="p-8">Post not found</div>;
  }

  return (
    <div className="w-full p-8 max-w-4xl mx-auto">
      <Link to="/blog" className="flex items-center gap-2 text-gray-600 mb-8 hover:text-gray-900">
        <ArrowLeft size={20} />
        Back to Blog
      </Link>

      <article className="prose lg:prose-xl">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
          <span>•</span>
          <Link to={`/blog/category/${post.category.id}`} className="hover:text-blue-600">
            {post.category.name}
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span key={tag.id} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {tag.name}
            </span>
          ))}
        </div>

        <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
};

export default BlogPost;