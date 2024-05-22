import s from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={s.notFoundPage}>
      <h1> Page not found</h1>
      <p>{`Sorry, the page you are looking for does not exist.`}</p>
    </div>
  );
};

export default NotFound;
