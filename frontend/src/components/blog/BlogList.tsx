import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight, TagIcon } from 'lucide-react';
import BlogSidebar from './BlogSidebar';
import { BlogPost, Tag, Category, BlogListProps } from '../../types';

interface ExtendedCategory extends Category {
  count: number;
}

interface ExtendedTag extends Tag {
  count: number;
}

const BlogList: React.FC<BlogListProps> = ({ tag, index }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);  // 空配列で初期化
  const [categories, setCategories] = useState<ExtendedCategory[]>([]);  // 空配列で初期化
  const [tags, setTags] = useState<ExtendedTag[]>([]); // 空配列で初期化
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [postsRes, categoriesRes, tagsRes] = await Promise.all([
          fetch('http://localhost:8080/api/v1/posts'),
          fetch('http://localhost:8080/api/v1/categories'),
          fetch('http://localhost:8080/api/v1/tags')
        ]);

        if (!postsRes.ok || !categoriesRes.ok || !tagsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [postsData, categoriesData, tagsData] = await Promise.all([
          postsRes.json(),
          categoriesRes.json(),
          tagsRes.json()
        ]);

        // データがオブジェクトで返ってきているため、data配列にアクセス
        const formattedCategories: ExtendedCategory[] = (categoriesData.data || []).map((category: any) => ({
          id: category.id,
          name: category.name,
          slug: category.slug,
          count: category.posts_count || 0
        }));

        const formattedTags: ExtendedTag[] = (tagsData.data || []).map((tag: any) => ({
          id: tag.id,
          name: tag.name,
          count: tag.posts_count || 0
        }));

        setPosts(postsData.data || []);
        setCategories(formattedCategories);
        setTags(formattedTags);

      } catch (error) {
        console.error('Error fetching data:', error);
        setPosts([]);
        setCategories([]);
        setTags([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = async (categoryId: number) => {
    setLoading(true);
    setSelectedCategory(categoryId);
    setSelectedTag(null);

    try {
      const response = await fetch(`http://localhost:8080/api/v1/categories/${categoryId}/posts`);
      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.error('Error fetching category posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTagClick = async (tagId: number) => {
    setLoading(true);
    setSelectedTag(tagId);
    setSelectedCategory(null);

    try {
      const response = await fetch(`http://localhost:8080/api/v1/tags/${tagId}/posts`);
      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.error('Error fetching tag posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500" />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            記事一覧
          </h1>
          <p className="mt-4 text-gray-600">
            Discover stories, thinking and expertise
          </p>
        </header>

        <div className="flex gap-8">
          {/* メインコンテンツ */}
          <div className="flex-1">
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                  <Link to={`/blog/${post.id}`} className="block">
                    {/* アイキャッチ画像 */}
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      {post.thumbnail_url ? (
                        <img
                          src={post.thumbnail_url}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                          <span className="text-green-500 text-lg">No Image</span>
                        </div>
                      )}
                    </div>

                    {/* 記事内容 */}
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full font-medium">
                          {post.category?.name || 'Uncategorized'}
                        </span>
                        <time className="flex items-center text-gray-500" dateTime={post.created_at}>
                          <Clock className="w-4 h-4 mr-1"/>
                          {post.created_at ? new Date(post.created_at).toLocaleDateString() : ''}
                        </time>
                      </div>

                      <h2 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.content}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags?.map((tag) => (
                          <span key={tag.id} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-50 text-green-700">
                            <TagIcon className="w-3 h-3 mr-1"/>
                            {tag.name}
                          </span>
                        )) || []}
                      </div>

                      <div
                        className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                        Read More
                        <ChevronRight className="w-5 h-5 ml-1"/>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* サイドバー */}
          <BlogSidebar
            categories={categories}
            tags={tags}
            selectedCategory={selectedCategory}
            selectedTag={selectedTag}
            onCategoryClick={handleCategoryClick}
            onTagClick={handleTagClick}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogList;