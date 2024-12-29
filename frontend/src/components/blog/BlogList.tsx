import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag as TagIcon, ChevronRight, Clock } from 'lucide-react';
import { BlogPost, BlogListProps, Tag } from '../../types';

const BlogList: React.FC<BlogListProps> = ({ tag, index }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/posts');
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Error fetching posts');
        }
        const data = await response.json();
        setPosts(data.data);
      } catch (err) {
        setError('投稿の取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [tag, index]);

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-48">
        <div className="text-red-500 font-medium">{error}</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex-1 ml-64"> {/* サイドバーの幅分のマージンを追加 */}
        <div className="flex justify-center items-center w-full h-screen bg-green-50">
          <div className="relative w-24 h-24">
            <div className="absolute top-0 left-0 w-full h-full border-8 border-green-200 rounded-full animate-ping" />
            <div className="absolute top-0 left-0 w-full h-full border-8 border-green-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1 ml-64 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            記事一覧
          </h1>
          <p className="mt-4 text-gray-600">Discover stories, thinking and expertise</p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            投稿が見つかりませんでした
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: BlogPost) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link to={`/blog/${post.id}`} className="block overflow-hidden">
                  {/* サムネイル画像部分 */}
                  <div className="relative h-48 bg-gradient-to-r from-green-500 to-emerald-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity" />
                  </div>

                  {/* コンテンツ部分 */}
                  <div className="p-6">
                    {/* カテゴリー＆日付 */}
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full font-medium">
                        {post.category?.name || 'Article'}
                      </span>
                      <time className="flex items-center text-gray-500" dateTime={post.created_at}>
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </time>
                    </div>

                    {/* タイトル */}
                    <h2 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* 記事プレビュー */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.content}
                    </p>

                    {/* タグ */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag: Tag) => (
                          <span
                            key={tag.id}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                          >
                            <TagIcon className="w-3 h-3 mr-1" />
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More リンク */}
                    <div className="flex items-center text-green-600 font-medium mt-4 group-hover:translate-x-2 transition-transform">
                      Read More
                      <ChevronRight className="w-5 h-5 ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogList;