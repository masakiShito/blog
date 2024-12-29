import React from 'react';
import { Tag, Category } from '../../types';

interface BlogSidebarProps {
  categories: (Category & { count: number })[];
  tags: (Tag & { count: number })[];
  selectedCategory: number | null;
  selectedTag: number | null;
  onCategoryClick: (categoryId: number) => void;
  onTagClick: (tagId: number) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
                                                   categories = [],
                                                   tags = [],
                                                   selectedCategory,
                                                   selectedTag,
                                                   onCategoryClick,
                                                   onTagClick
                                                 }) => {
  const categoriesList = Array.isArray(categories) ? categories : [];
  const tagsList = Array.isArray(tags) ? tags : [];

  return (
    <div className="w-72 space-y-6"> {/* 幅を少し広げ、間隔を調整 */}
      {/* カテゴリセクション */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-shadow hover:shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">カテゴリー</h2>
        <div className="space-y-2">
          {categoriesList.length > 0 ? (
            categoriesList.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-green-100 text-green-700 font-medium shadow-sm'
                    : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-sm text-gray-500">
                    ({category.count || 0})
                  </span>
                </div>
              </button>
            ))
          ) : (
            <p className="text-gray-500 text-center py-3 bg-gray-50 rounded-lg">
              カテゴリーがありません
            </p>
          )}
        </div>
      </div>

      {/* タグセクション */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-shadow hover:shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">タグ</h2>
        <div className="flex flex-wrap gap-2">
          {tagsList.length > 0 ? (
            tagsList.map((tag) => (
              <button
                key={tag.id}
                onClick={() => onTagClick(tag.id)}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                  selectedTag === tag.id
                    ? 'bg-green-100 text-green-700 font-medium shadow-sm'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {tag.name}
                <span className="ml-2 text-sm text-gray-500">
                  ({tag.count || 0})
                </span>
              </button>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full py-3 bg-gray-50 rounded-lg">
              タグがありません
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;