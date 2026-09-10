export interface ProjectStep {
  title: string;
  description: string;
}

export interface ProjectChoice {
  label: string;
  text: string;
}

export type ProjectSectionVariant = 'classic' | 'development' | 'result' | 'learned';

export interface ProjectSection {
  number: string;
  title: string;
  variant?: ProjectSectionVariant;
  paragraphs?: string[];
  steps?: ProjectStep[];
  choices?: ProjectChoice[];
  bullets?: string[];
}

export interface ProjectPageData {
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;
  summary: string;
  body: string[];
  highlights: string[];
  role: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  projectImage?: string;
  projectPreviewImage?: string;
  imageCaption?: string;
  sections: ProjectSection[];
}
