export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    id: 'anthropic-fellowship-story',
    title: "I didn't get the Anthropic Fellowship, but I got a story and a cigar",
    description: 'A personal story about the Anthropic Fellowship application journey.',
    image: '/images/anthropic-blog.png', // You can replace this with your actual image
    url: 'https://medium.com/@zackhui52/i-didnt-get-the-anthropic-fellowship-but-i-got-a-story-and-a-cigar-4615fea6edc0',
    date: 'October 2025',
  },
];

