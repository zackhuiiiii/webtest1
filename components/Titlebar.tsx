import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image
        src="/logos/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/about">
          <p>About Me</p>
        </Link>
        <Link href="/publications">
          <p>Publications</p>
        </Link>
        
        <Link href="/github">
          <p>GitHub</p>
        </Link>
        <Link href="/mentoring">
          <p>Mentoring</p>
        </Link>
        <Link href="/contact">
          <p>Content</p>
        </Link>
      </div>
      <p className={styles.title}>Zack Hui - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
