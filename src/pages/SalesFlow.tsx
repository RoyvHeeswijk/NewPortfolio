"use client"

import ProjectSignalPage from '@/components/project/ProjectSignalPage';
import { salesFlowPage } from '@/data/projectPages';

export default function SalesFlowProjectPage() {
  return <ProjectSignalPage {...salesFlowPage} />;
}
