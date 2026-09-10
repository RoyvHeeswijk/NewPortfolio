"use client"

import ProjectSignalPage from '@/components/project/ProjectSignalPage';
import { forgePage } from '@/data/projectPages';

export default function ForgeProjectPage() {
  return <ProjectSignalPage {...forgePage} />;
}
