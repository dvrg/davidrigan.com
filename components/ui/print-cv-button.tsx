'use client'

export function PrintCVButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 print:hidden"
      type="button"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7.5 1C7.77614 1 8 1.22386 8 1.5V8.29289L10.1464 6.14645C10.3417 5.95118 10.6583 5.95118 10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355L7.85355 9.85355C7.65829 10.0488 7.34171 10.0488 7.14645 9.85355L4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645C4.34171 5.95118 4.65829 5.95118 4.85355 6.14645L7 8.29289V1.5C7 1.22386 7.22386 1 7.5 1ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12H12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12.5C13 12.7761 12.7761 13 12.5 13H2.5C2.22386 13 2 12.7761 2 12.5V10.5C2 10.2239 2.22386 10 2.5 10Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
      Download CV
    </button>
  )
}
