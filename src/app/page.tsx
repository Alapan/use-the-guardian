'use client';

import InputForm from '@/stories/InputForm';
import styles from './styles/page.module.css';

export default function Home() {
  return (
    <main>
      <div className={styles.formContainerCls}>
        <InputForm onSubmit={() => null}/>
      </div>
    </main>
  );
};
