'use client';

import Image from 'next/image';

import Search from './assets/search.svg';
import styles from './styles/inputform.module.css';

interface InputFormProps {
  onSubmit: (formData: FormData) => void;
}

const InputForm = ({ onSubmit }: InputFormProps) => {
  return (
    <form action={onSubmit}>
      <input
        type='text'
        placeholder='Enter search text'
        className={styles.inputFieldCls}
        name='searchTerm'
      />
      <button type={'submit'} className={styles.submitButtonCls}>
        <Image
          width={20}
          height={21}
          src={Search}
          alt={'Click to search articles'}
        />
      </button>
    </form>
  );
};

export default InputForm;
