import React from 'react';

export type Language = 'ar' | 'en';

export interface Project {
  id: string;
  title: string;
  role?: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}