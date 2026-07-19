import { describe, it, expect } from 'vitest'
import { WEBSITE_URL } from '@/lib/constants'

describe('constants', () => {
  it('has the correct website URL', () => {
    expect(WEBSITE_URL).toBe('https://davidrigan.com')
  })
})
