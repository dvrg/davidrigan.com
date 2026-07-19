import type { Metadata } from 'next'
import Link from 'next/link'
import { PrintCVButton } from '@/components/ui/print-cv-button'

export const metadata: Metadata = {
  title: 'CV - David Rigan',
  description: 'David Rigan - Latest Professional CV (May 2026)',
}

export default function CVLatestPage() {
  return (
    <main id="cv-content">
      <div>
        {/* CV Nav */}
        <div className="mb-6 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 print:hidden">
          <Link
            href="/cv"
            className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            ← All CV versions
          </Link>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              Latest — May 2026
            </span>
            <PrintCVButton />
          </div>
        </div>

        {/* Header */}
        <div className="mb-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <div className="flex items-baseline justify-between">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              David Rigan
            </h1>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Software Engineer
            </p>
          </div>
          <div className="mt-2 grid grid-cols-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p className="text-left">hi@davidrigan.com</p>
            <p className="text-center">+62 851-6277-5595</p>
            <p className="text-center">Jakarta, Indonesia</p>
            <p className="text-right">linkedin.com/in/dvrg</p>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Professional Summary
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Software engineer with a background in finance, driven by continuous
            learning. Passionate about building accessible, impactful products
            that empower Gen Z. Experienced in full-stack development with
            expertise in modern web technologies. Strong problem-solver with a
            track record of delivering high-quality solutions in fast-paced
            environments.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Core Competencies
          </h2>
          <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 sm:grid-cols-2 dark:text-zinc-300">
            <li>• Golang / Python / TypeScript</li>
            <li>• Database (MySQL, MongoDB)</li>
            <li>• REST, gRPC</li>
            <li>• Microservice, Event-Driven, DDD</li>
            <li>• APM (Datadog, NewRelic)</li>
            <li>• Messages Broker (Apache Kafka, RabbitMQ)</li>
            <li>• CI/CD Pipelines (Bitbucket, GitHub Actions)</li>
            <li>• Cloud Platforms (AWS, GCP)</li>
            <li>• AWS Step Function, Temporal</li>
            <li>• Financial Systems in BNPL</li>
            <li>• Squad (User, Transaction)</li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Professional Experience
          </h2>

          <div className="mb-4">
            <div className="flex flex-col justify-between sm:flex-row">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">
                  Software Engineer II
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Kredivo Group, Jakarta, Indonesia
                </p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                October 2021 – Present
              </p>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                • Led architectural design of an extensible Fraud Check system
                utilizing external providers, streamlining multi-partner
                document validation and accelerating future development.
              </li>
              <li>
                • Designed and automated a scheduled global user-status system
                for blocking/unblocking flows, providing critical transition
                tracking and reducing manual operational interventions.
              </li>
              <li>
                • Engineered promo approval flows for partners, projecting a 2%
                monthly performance boost while executing complex weekend
                deployments to protect system continuity under tight deadlines.
              </li>
              <li>
                • Drove operational excellence by building a tracking framework
                that cut system alert noise by ~60%, eliminating alert fatigue
                and refining incident response via targeted alert
                prioritization.
              </li>
              <li>
                • Upholded code standards as core reviewer across master PRs
                with a 92% deployment success rate, scaling code health impact
                from 107 to 333 expert alignment comments.
              </li>
            </ul>
          </div>
        </section>

        {/* Notable Projects */}
        <section className="mb-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Notable Projects
          </h2>

          <div className="mb-4">
            <div className="flex flex-col justify-between sm:flex-row sm:items-start">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50">
                Financial Zen
              </h3>
              <a
                href="https://financialzen.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                financialzen.id
              </a>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">
              Full-stack fintech application for Gen Z financial management and
              education
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                • Technologies: React, Next.js, Node.js, PostgreSQL, TypeScript
              </li>
              <li>
                • Developed end-to-end features for user onboarding and
                portfolio management
              </li>
              <li>
                • Implemented secure payment integration and transaction
                processing
              </li>
              <li>• Achieved 95% uptime and handled 10,000+ active users</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col justify-between sm:flex-row sm:items-start">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50">
                My Micro Learning
              </h3>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">
              Engine to create micro learning content
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Technologies: Next.js, React, TypeScript, Tailwind CSS</li>
              <li>• Accessible in multiple platforms</li>
              <li>• AI integration for multimodal content generation</li>
              <li>• Education Support + Open Source Projects</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Education
          </h2>

          <div className="mb-4">
            <div className="flex flex-col justify-between sm:flex-row">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">
                  Associate AI Engineer
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Datacamp, Online, Self Paced
                </p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">2026 – Now</p>
            </div>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Learn and build real AI projects and applications
            </p>
          </div>

          <div>
            <div className="flex flex-col justify-between sm:flex-row">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">
                  Bachelor of Informatics
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  University of AMIKOM, Yogyakarta, Indonesia
                </p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">2015 – 2020</p>
            </div>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              GPA: 3.7/4.0 | Relevant Coursework: Data Structures, Web
              Development, Database Systems, Software Engineering
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Certifications
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Associate AI Engineer - Datacamp (2026)</li>
            <li>• AI Fundamentals - Datacamp (2026)</li>
            <li>• Claude 101 (2026)</li>
          </ul>
        </section>

        {/* Languages */}
        <section className="mb-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Languages
          </h2>
          <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Indonesian - Native</li>
            <li>• English - Fluent (Professional Working Proficiency)</li>
            <li>• German - Basic (A1)</li>
          </ul>
        </section>

        {/* Additional Information */}
        {/* <section>
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">Additional Information</h2>
          <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Open source contributor with multiple projects on GitHub</li>
            <li>• Technical blogger sharing insights on web development and fintech</li>
            <li>• Active participant in tech communities and meetups</li>
            <li>• Passionate about mentoring junior developers</li>
          </ul>
        </section> */}
      </div>
    </main>
  )
}
