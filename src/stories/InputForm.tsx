'use client';

import { FormEvent } from 'react';
import Image from 'next/image';

import Search from './assets/search.svg';
import styles from './styles/InputForm.module.css';

interface InputFormProps {
  handleApiCall: () => Promise<void>;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}

const InputForm = ({ handleApiCall, value, onChange }: InputFormProps) => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleApiCall();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <input
        type="text"
        placeholder="Enter search text"
        className={styles.inputFieldCls}
        name="searchTerm"
        value={value}
        onChange={onChange}
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
