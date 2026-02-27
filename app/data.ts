type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Financial Zen',
    description:
      'Financial Zen is a app that helps genz to manage and learn about finances.',
    link: 'https://financialzen.id',
    video:
      'https://stream.mux.com/bjyGMebh5nH6r7sJUPvn01Zc9jnoe29HpwmzjcyfeoKM.m3u8',
    id: 'project1',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Kredivo Group',
    title: 'Software Engineer',
    start: '2021',
    end: 'Present',
    link: 'https://www.linkedin.com/company/kredivo-group',
    id: 'work1',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Cara Jitu Nulis Appraisal Review: Dari Cupu ke Level 2',
    description:
      'Sharing gimana cara nulis appraisal review untuk jadi engineer yang lebih mateng',
    link: '/blog/cara-nulis-appraisal-review-dari-cupu-ke-level-2',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/dvrg',
  },
  {
    label: 'LinkedIn',
    link: 'https://id.linkedin.com/in/dvrg',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/david.de.rigan',
  },
]

export const EMAIL = 'hi@davidrigan.com'
