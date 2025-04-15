import { GetStaticProps } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Publications.module.css';
import { Publication, parseBibFile } from '@/utils/bibParser';

interface PublicationsPageProps {
  publications: Publication[];
}

export default function PublicationsPage({ publications = [] }: PublicationsPageProps) {
  const [filterText, setFilterText] = useState('');
  const [showAbstract, setShowAbstract] = useState<{ [key: string]: boolean }>({});

  const toggleAbstract = (id: string) => {
    setShowAbstract(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredPublications = publications.filter(pub => 
    pub.title.toLowerCase().includes(filterText.toLowerCase()) ||
    pub.authors.some(author => author.toLowerCase().includes(filterText.toLowerCase())) ||
    pub.conference.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Publications</h1>
      <p className={styles.subtitle}>
        publications by categories in reversed chronological order
      </p>

      <input
        type="text"
        placeholder="Type to filter"
        className={styles.searchInput}
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <div className={styles.publicationsList}>
        {filteredPublications.map((pub) => (
          <div key={pub.id} className={styles.publicationCard}>
          <div className={styles.cardContent}>
            <div className={styles.imageContainer}>
              {pub.abbr && (
                <div className={styles.badge}
                data-conf={pub.abbr.split(' ')[0]}
                >{pub.abbr}</div>
              )}
              {pub.preview && (
                <div className={styles.previewImage}>
                  <Image
                    src={`/images/${pub.preview}`}
                    alt={pub.title}
                    width={160}
                    height={100}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              )}
            </div>
            <div className={styles.publicationInfo}>
                <h2 className={styles.publicationTitle}>{pub.title}</h2>
                <p className={styles.authors}>
                    {pub.authors.map((author, index) => (
                    <span key={index}>
                        {author === "Zheng Hui" ? (
                        <span className={styles.highlightedAuthor}>{author}</span>
                        ) : (
                        author
                        )}
                        {index < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                    ))}
                </p>
                <p className={styles.venue}>{pub.conference}</p>

              
              <div className={styles.actions}>
                {pub.abstract && (
                  <button
                    onClick={() => toggleAbstract(pub.id)}
                    className={styles.actionButton}
                  >
                    ABS
                  </button>
                )}
                  {pub.pdf && (
                    <a 
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionButton}
                    >
                      PDF
                    </a>
                  )}
                  <button
                    onClick={() => navigator.clipboard.writeText(`@${pub.id}`)}
                    className={styles.actionButton}
                  >
                    BIB
                  </button>
                </div>
                
                {showAbstract[pub.id] && pub.abstract && (
                  <p className={styles.abstract}>{pub.abstract}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PublicationsPageProps> = async () => {
  try {
    const publications = parseBibFile();
    return {
      props: {
        publications: publications.sort((a, b) => 
          parseInt(b.year) - parseInt(a.year)
        ),
      },
    };
  } catch (error) {
    console.error('Error parsing publications:', error);
    return {
      props: {
        publications: [],
      },
    };
  }
};