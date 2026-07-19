import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const mdx = require('eslint-plugin-mdx')

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      'no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.mdx'],
    rules: {
      'react/jsx-no-undef': 'off',
    },
  },
]

export default eslintConfig
