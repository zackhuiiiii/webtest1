import BlogCard from '@/components/BlogCard';
import { blogs } from '@/data/blogs';
import styles from '@/styles/BlogPage.module.css';

const BlogPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <p className={styles.pageSubtitle}>
        Thoughts, stories, and insights from my journey. Read my articles on Medium.
      </p>

      <div className={styles.container}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Blog' },
  };
}

export default BlogPage;

