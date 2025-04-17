import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { VscChevronRight, VscClose } from 'react-icons/vsc';
import styles from '@/styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'Home',
    path: '/',
    icon: '/logos/react_icon.svg',
  },
  {
    name: 'About Me.html',
    path: '/about',
    icon: '/logos/html_icon.svg',
  },
  {
    name: 'Publications',
    path: '/publications',
    icon: '/logos/json_icon.svg',
  },
  {
    name: 'github',
    path: '/github',
    icon: '/logos/markdown_icon.svg',
  },
  {
    name: 'Mentoring.md',
    path: '/mentoring',
    icon: '/logos/mentoring_icon.svg',
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: '/logos/css_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  // Close explorer when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const explorer = document.getElementById('explorer');
      if (explorer && !explorer.contains(event.target as Node)) {
        setIsExplorerOpen(false);
      }
    };

    if (isExplorerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExplorerOpen]);

  // Close explorer when route changes on mobile
  useEffect(() => {
    setIsExplorerOpen(false);
  }, []);

  return (
    <>
      <button 
        className={styles.mobileToggle}
        onClick={() => setIsExplorerOpen(!isExplorerOpen)}
        aria-label="Toggle Explorer"
      >
        {isExplorerOpen ? <VscClose /> : <VscChevronRight />}
      </button>

      <div 
        id="explorer"
        className={`${styles.explorer} ${isExplorerOpen ? styles.open : ''}`}
      >
        <div className={styles.explorerHeader}>
          <p className={styles.title}>Explorer</p>
          <button 
            className={styles.mobileClose}
            onClick={() => setIsExplorerOpen(false)}
            aria-label="Close Explorer"
          >
            <VscClose />
          </button>
        </div>

        <div className={styles.explorerContent}>
          <input
            type="checkbox"
            className={styles.checkbox}
            id="portfolio-checkbox"
            checked={portfolioOpen}
            onChange={() => setPortfolioOpen(!portfolioOpen)}
          />
          <label htmlFor="portfolio-checkbox" className={styles.heading}>
            <VscChevronRight
              className={styles.chevron}
              style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
            />
            Portfolio
          </label>
          <div
            className={styles.files}
            style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
          >
            {explorerItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <div 
                  className={styles.file}
                  onClick={() => setIsExplorerOpen(false)}
                >
                  <Image 
                    src={item.icon} 
                    alt={item.name} 
                    height={18} 
                    width={18} 
                  />
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explorer;