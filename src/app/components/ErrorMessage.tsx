import styles from './styles/ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className={styles.errorMessageCls}>{message}</div>;
};

export default ErrorMessage;
