import styles from './styles/ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;  
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={styles.errorTextCls}>
      {message}
    </div>
  );
};

export default ErrorMessage;
