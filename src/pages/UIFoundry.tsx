"use client"

import ProjectSignalPage from '@/components/project/ProjectSignalPage';
import { uiFoundryPage } from '@/data/projectPages';

export default function UIFoundryProjectPage() {
  return <ProjectSignalPage {...uiFoundryPage} />;
}
