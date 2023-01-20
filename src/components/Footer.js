import footerLogo from "../asset/Asset 9@4x.png";
import classes from "./Footer.module.css";
import IconFacebookCircleFill from "../UI/Facebooksvg";
import IconTwitterCircled from "../UI/IconTwitterCircled";
import IconInstagram from "../UI/IconInstagram";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img style={{ height: 150 }} src={footerLogo} alt="footer Logo" />
      <div className={classes["footer-detail"]}>
        <ul className={classes["footer-list"]}>
          <li className={classes.home}>
            <a href="/">doormat navigation</a>
          </li>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">login</a>
          </li>
        </ul>
        <ul className={classes["footer-list"]}>
          <li className={classes.home}>
            <a href="/">contact</a>
          </li>
          <li>
            <a href="/">Address</a>
          </li>
          <li>
            <a href="/">phone number</a>
          </li>
          <li>
            <a href="/">email</a>
          </li>
        </ul>
        <div className={classes.social}>
          <h4 className={classes['social-heading']}>social media link</h4>
          <div className={classes['social-list']}>
            <a href="/"><IconFacebookCircleFill className={classes.icon} /></a>
            <a href="/"><IconTwitterCircled className={classes.icon} /></a>
            <a href="/"><IconInstagram className={classes.icon} /></a>
          </div>
        </div>

        {/* <ul className={classes["social-list"]}>

          <li>
            <a href="/">

            </a>
          </li>
          <li>
            <a href="/">

            </a>
          </li>
          <li>
            <a href="/">
              <IconInstagram className={classes.icon}/>
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;
