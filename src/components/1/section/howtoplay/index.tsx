import React from 'react';
import styles from './styles.module.css'

export const SectionHowToPlay: React.FC = () => {
  return <section className={styles.module} onClick={() => console.log('test')}>遊び方</section>
}