import style from "../../../styles/common.module.scss";

function Footer({ opt }) {
  return (
    <div className={`${style.commonFooter}`}>
      <div className={style.commonContentFooter}>
        <div className={style.navigation}>
          <a href="#">ABOUT US</a>
          <span>|</span>
          <a href="#">CONTACT US</a>
          <span>|</span>
          <a href="#">COOKIES POLICY</a>
        </div>
        <div className={style.copyright}>
          <div>All Rights Reserved © 2020 Copy right</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
