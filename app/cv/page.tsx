import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CV Archive - David Rigan',
  description: 'All versions of David Rigan\'s professional CV',
}

type CVVersion = {
  label: string
  description: string
  href: string
  isLatest?: boolean
}

const CV_VERSIONS: CVVersion[] = [
  {
    label: 'May 2026',
    description: 'Current version — Software Engineer at Kredivo Group',
    href: '/cv/latest',
    isLatest: true,
  },
  // When you archive and add a new version, move the old one here:
  // {
  //   label: 'January 2024',
  //   description: 'Previous version — Software Engineer at Kredivo Group',
  //   href: '/cv/archive/2024-january',
  // },
]

export default function CVIndexPage() {
  return (
    <main>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">CV Versions</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">All published versions of my professional CV.</p>
        </div>

        <div className="flex flex-col space-y-3">
          {CV_VERSIONS.map((cv) => (
            <Link
              key={cv.href}
              href={cv.href}
              className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-5 py-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">{cv.label}</span>
                {cv.isLatest && (
                  <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                    Latest
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden text-sm text-zinc-500 dark:text-zinc-400 sm:block">{cv.description}</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 dark:text-zinc-500"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
