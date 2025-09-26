type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
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

type Book = {
  title: string
  author: string
  cover: string
  rating: number
  insight: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Claritylog',
    description: 'A minimalist journaling app for focus and progress.',
    link: 'https://claritylog.org',
    image: '/Claritylog[new_logo].png',
    id: 'project1',
  },
  {
    name: 'Wildlife Insight Agent',
    description: 'AI-powered multi-agent system for wildlife conservation research using CrewAI and GBIF data.',
    link: 'https://wildlife-insight-agent.onrender.com/',
    image: 'https://images.unsplash.com/photo-1525382455947-f319bc05fb35?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 'project2',
  },
  {
    name: 'Adverse Event Detection Pipeline',
    description: 'Real-time LLM-powered system for detecting adverse events in EHR using Gemini 2.5 Flash.',
    link: 'https://github.com/was-abi/adverse-event-detection-llm',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    id: 'project3',
  },
]
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Johnson & Johnson',
    title: 'AI/ML Developer',
    start: 'Jan 2025',
    end: 'Present',
    link: 'https://www.jnj.com',
    id: 'work1',
  },
  {
    company: 'Goldman Sachs',
    title: 'AI & Deep Learning Developer',
    start: 'Jan 2024',
    end: 'Dec 2024',
    link: 'https://www.goldmansachs.com',
    id: 'work2',
  },
  {
    company: 'Accenture',
    title: 'Machine Learning Engineer',
    start: 'Jan 2019',
    end: 'Jul 2022',
    link: 'https://www.accenture.com/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Claritylog: A Calm System for Focus, Insight, and Progress',
    description: 'Introducing Claritylog, a minimalist journaling app for focus and progress.',
    link: '/blog/claritylog',
    uid: 'blog-5',
  },
  {
    title: 'Wildlife Insight Agent: AI-Powered Conservation Research for Everyone',
    description: 'Discover how multi-agent AI is revolutionizing wildlife conservation with CrewAI, Gemini LLM, and GBIF data.',
    link: '/blog/wildlife-insight-agent',
    uid: 'blog-6',
  },
  {
    title: 'Real-Time Adverse Event Detection in EHR: LLM-Powered Pipeline with Gemini 2.5 Flash',
    description: 'Upgrade a Chip Huyen-inspired pipeline with Gemini 2.5 Flash for ingesting clinical notes, extracting events, and triggering alerts in a production-ready AI system.',
    link: '/blog/adverse-event-detection-llm',
    uid: 'blog-7',
  },
]
export const BOOKS: Book[] = [
  {
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646444605l/485894._SX50_.jpg',
    rating: 5,
    insight: 'A haunting exploration of alienation and transformation in a surreal narrative.',
    link: 'https://www.goodreads.com/book/show/485894.The_Metamorphosis',
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546103428l/5297._SY75_.jpg',
    rating: 5,
    insight: 'Wilde\'s timeless critique of vanity, morality, and the consequences of eternal youth.',
    link: 'https://www.goodreads.com/book/show/5297.The_Picture_of_Dorian_Gray',
  },
  {
    title: 'A Game of Thrones (A Song of Ice and Fire #1)',
    author: 'George R.R. Martin',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562726234l/13496._SY75_.jpg',
    rating: 4,
    insight: 'Epic political intrigue and world-building in a series that redefines fantasy storytelling.',
    link: 'https://www.goodreads.com/book/show/13496.A_Game_of_Thrones',
  },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1738704267l/49552._SY75_.jpg',
    rating: 5,
    insight: 'A profound examination of absurdity and existential indifference in modern life.',
    link: 'https://www.goodreads.com/book/show/49552.The_Stranger',
  },
  {
    title: 'Convenience Store Woman',
    author: 'Sayaka Murata',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523623053l/38357895._SY75_.jpg',
    rating: 5,
    insight: 'A witty and poignant look at societal norms and personal fulfillment through an unconventional lens.',
    link: 'https://www.goodreads.com/book/show/38357895-convenience-store-woman',
  },
  {
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353048590l/6334._SY75_.jpg',
    rating: 5,
    insight: 'Ishiguro\'s subtle dystopian tale of love, loss, and humanity in a hauntingly familiar world.',
    link: 'https://www.goodreads.com/book/show/6334.Never_Let_Me_Go',
  },
  {
    title: 'No Longer Human',
    author: 'Osamu Dazai',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422638843l/194746._SY75_.jpg',
    rating: 5,
    insight: 'A raw, introspective journey through despair and the struggle for authenticity.',
    link: 'https://www.goodreads.com/book/show/194746.No_Longer_Human',
  },
  {
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1429638085i/4929.jpg',
    rating: 4,
    insight: 'Murakami\'s surreal blend of mystery, fantasy, and philosophy in a quest for self-discovery.',
    link: 'https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/was-abi',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/abhishek-gajul/',
  },
  {
    label: 'X',
    link: 'https://x.com/AbhishekGajul1',
  },
]

export const EMAIL = 'abhishek.g@mymailshub.com'
