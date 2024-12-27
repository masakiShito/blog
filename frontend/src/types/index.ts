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

export type NavBarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export type Section = 'home' | 'about' | 'resume' | 'portfolio' | 'services' | 'contact';

export interface NavigationItemProps {
  id: Section;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: (section: Section) => void;
}