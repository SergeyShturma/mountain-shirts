import s from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_section}>
        <p className={s.footer_text}> 2023 | All Rights Reserved |</p>
        <p className={s.footer_margin}>
          {' '}
          Developed with
          <svg
            className={s.footer_icon}
            lang="en"
            aria-label="heart"
            width="14"
            height="13"
          >
            <use href="/src/images/sprite.svg#icon-heart"></use>
          </svg>
          by Shturma
        </p>
      </div>
    </footer>
  );
};
