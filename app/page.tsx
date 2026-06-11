import type { Metadata } from 'next'
import HomeContent from './_components/home-content'

export const metadata: Metadata = {
  title: 'David Rigan - Personal website',
  description: 'Software engineer with a background in finance, driven by continuous learning. Passionate about building accessible, impactful products that empower Gen Z.',
  alternates: {
    canonical: '/',
  },
}

export default function Personal() {
  return <HomeContent />
}
