import Image from 'next/image';
import { Blog } from '@/types';
import styles from '@/styles/BlogCard.module.css';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <a
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.date}>{blog.date}</div>
        <h3 className={styles.title}>{blog.title}</h3>
        <p className={styles.description}>{blog.description}</p>
        <div className={styles.readMore}>
          Read on Medium →
        </div>
      </div>
    </a>
  );
};

export default BlogCard;

