"use client"

import ProjectSignalPage from '@/components/project/ProjectSignalPage';
import { upendoPage } from '@/data/projectPages';

export default function UpendoProjectPage() {
  return <ProjectSignalPage {...upendoPage} />;
}
