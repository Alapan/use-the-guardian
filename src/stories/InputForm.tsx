import Image from 'next/image';

import Search from './assets/search.svg';
import './styles/inputform.css';

interface InputFormProps {
  onSubmit: () => void;
}

const InputForm = ({ onSubmit }: InputFormProps) => {
  return (
    <form action={onSubmit}>
      <input
        type='text'
        placeholder='Enter search text'
        className='input-field'
      />
      <button type='submit' className='submit-button'>
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
