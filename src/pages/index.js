import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <Image src="/profile-pic.png" alt="My Profile Picture" width={150} height={150} />
      <p>This is the homepage of my portfolio website built with Next.js.</p>
      <div className={styles.links}>
        <Link href="/about">About Me</Link> | 
        <Link href="/projects">My Projects</Link> | 
        <Link href="/contact">Contact Me</Link>
      </div>
    </div>
  );
}

