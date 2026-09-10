"use client"

import ProjectSignalPage from '@/components/project/ProjectSignalPage';
import { gymTrackPage } from '@/data/projectPages';

export default function GymTrackProjectPage() {
  return <ProjectSignalPage {...gymTrackPage} />;
}
