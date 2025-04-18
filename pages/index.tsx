import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: 'const HomePage = () => {', type: 'function' },
    { code: '  const developerInfo = {', type: 'variable' },
    { code: "    name: 'Zack Hui',", type: 'array-item' },
    { code: "    role: 'NLP Researcher',", type: 'array-item' },
    { code: "    bio: 'AI Alchemist'", type: 'array-item' },
    { code: '  };', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: '  const websiteGuide = {', type: 'variable' },
    { code: '    welcome: "Let me show you around:",', type: 'string' },
    { code: '    sections: [', type: 'array-start' },
    { code: "      'Want to know more about me?'", type: 'string' },
    { code: "      '→ Check out my story in About Me'", type: 'string' },
    { code: '', type: 'blank' },
    { code: "      'Interested in my research?'", type: 'string' },
    { code: "      '→ Browse my Publications'", type: 'string' },
    { code: '', type: 'blank' },
    { code: "      'Looking for code samples?'", type: 'string' },
    { code: "      '→ Visit my GitHub projects'", type: 'string' },
    { code: '', type: 'blank' },
    { code: "      'Need guidance in AI?'", type: 'string' },
    { code: "      '→ Learn about my Mentoring program'", type: 'string' },
    { code: '', type: 'blank' },
    { code: "      'Want to collaborate?'", type: 'string' },
    { code: "      '→ Get in touch through Contact'", type: 'string' },
    { code: '    ]', type: 'array-end' },
    { code: '  };', type: 'close' },
    { code: '', type: 'blank' },
    { code: '  // Ready to explore?', type: 'comment' },
    { code: '  // Click any section to begin!', type: 'comment' },
    { code: '', type: 'blank' },
    { code: 'export default HomePage;', type: 'function-call' }
];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${
                      index === activeLineIndex ? styles.highlightedLine : ''
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Zack <span className={styles.accentText}>Hui</span>
          </h1>

          <div className={styles.developerRole}> NLP Researcher </div>

          
          <p className={styles.bio}>
            I’m working to make AI safer and more aligned with 
            humans—so we can actually trust them in the real world, not just in the lab.
          </p>
          

          <div className={styles.actionLinks}>
            <Link href="/about" className={styles.primaryLink}>
              About Me <VscArrowRight />
            </Link>
          </div>

          <div className={styles.socialLinks}>
              <a 
                href="https://www.linkedin.com/in/zheng-hui52/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/zackhuiiiii" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaGithub />
              </a>
              <a 
                href="https://scholar.google.com/citations?user=BnlPIK0AAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <SiGooglescholar />
              </a>
              <a 
                href="mailto:zh2483@columbia.edu"
                className={styles.socialIcon}
              >
                <MdEmail />
              </a>
            </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
