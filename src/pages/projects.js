import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <ul>
        <li>Project 1: E-commerce Site</li>
        <li>Project 2: Portfolio Website</li>
        <li>Project 3: Dashboards App</li>
      </ul>
    </div>
  );
}
