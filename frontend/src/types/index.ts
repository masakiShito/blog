// types/index.ts
import { LucideIcon } from 'lucide-react';

export type NavItem = {
  id: string;
  label: string;
};

export type Project = {
  title: string;
  category: string;
  imageUrl?: string;
};

export type Service = {
  title: string;
  icon: string;
  description?: string;
};

export type SocialIconProps = {
  Icon: LucideIcon;
  href: string;
};

export type Section = 'home' | 'about' | 'resume' | 'portfolio' | 'services' | 'contact' | 'blog';

export type NavBarProps = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
};

export interface NavigationItemProps {
  id: Section;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: (section: Section) => void;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: Category;  // CategoryオブジェクトへのReference
  tags: Tag[];        // Tag配列へのReference
  created_at: string;
}

export interface BlogListProps {
  tag?: string;
  index?: number;
}

// 必要に応じて追加の型
export interface CategoryWithPosts extends Category {
  posts: BlogPost[];
}

export interface RouteParams {
  postId?: string;
  categoryId?: string;
}