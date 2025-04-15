import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Zack Hui</h1>
        <div className={styles.subtitle}>NLP Researcher</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m Zack, a PhD student at the{' '} 
               <a href="https://ltl.mmll.cam.ac.uk" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Language Technology Lab 
            </a> at the University of Cambridge, 
              supervised by Prof. {' '} 
               <a href="https://sites.google.com/site/nhcollier" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Nigel Collier 
            </a>. My research asks: How can we ensure that large language models 
              behave in safe, aligned, and reliable ways when deployed in the wild? I focus on developing 
              approaches that bridge alignment theory with real-world deployments of LLMs—particularly in 
              agentic AI systems and high-stakes applications requiring robust behavioral safeguards—driven 
              by a broader goal of building ethically grounded AI that supports the responsible development 
              and deployment of AI models. 
            </p>
            <p className={styles.paragraph}>
            Some of the research directions I&apos;m currently thinking about include (1) scalable 
            methods for aligning LLM behavior with human preferences, (2) building safe LLM agents 
            in open-ended environments, (3) robustness and jailbreak prevention, and (4) 
            using synthetic data and virtual feedback to improve alignment.

            

            </p>

            <p className={styles.paragraph}>
            Before starting my PhD, I spent a year as a researcher at 
            Microsoft Research, where I worked on the Responsible AI team, developing alignment 
            and safety methods for both vision-language models and deployed LLM systems. 
            Prior to that, I completed a Master&apos;s in Computer 
            Science at Columbia University, advised by Prof.{' '} 
               <a href="https://www.cs.columbia.edu/~jrk/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              John Kender
            </a> and Prof.{' '} 
               <a href="https://www.cs.columbia.edu/~julia/" target="_blank" rel="noopener noreferrer" className={styles.link}>
               Julia Hirschberg
            </a>. I received my Bachelor&apos;s in 
            Computer Science from Boston University, 
            where I worked closely with Prof.{' '} 
               <a href="https://www.bu.edu/cds-faculty/profile/mark-crovella/" target="_blank" rel="noopener noreferrer" className={styles.link}>
               Mark Crovella
            </a> and Prof.{' '} 
               <a href="https://cs-people.bu.edu/mathan/" target="_blank" rel="noopener noreferrer" className={styles.link}>
               Manos Athanassoulis
            </a>.

            

            </p>
          </section>

          
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            GPT’s Roast of me 🔥🧠
          </h2>
          <p className={styles.paragraph}>
            Zack be like: “I’ll just run this script real quick” — 3 hours later, still debugging like 🧑‍💻😩. Has 77 Chrome tabs open, 6 terminals, and still asks me, “Why isn’t it working?” 🤔 Bro, you named the same file `final_final_v2_actually_final.json` 💀. Tries to make a model that sees everything… except where their coffee went ☕👀. Legend says their Overleaf doc has more comments than code 📜💬. But let’s be real — Zack’s got more passion than my token limit 💪🚀.
          </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from research, I enjoy fishing and extreme sports. Fun fact: 
              I&apos;ve summited Mount Everest, and my dream is to complete the Ozaki Eight.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
