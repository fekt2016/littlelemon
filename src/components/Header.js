import { Link } from "react-router-dom";
import img from "../asset/restauranfood.jpg";
import Button from "../UI/Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.headerimg} src={img} alt="header logo" />
      <div className={classes.headerdetail}>
        <h1 className={classes.headerprimary}>little lemon</h1>
        <span className={classes.headersec}>chicago</span>
        <p className={classes.headertext}>
          lerom ipsum siittmmme coconddb hhihohslh ghjuyytfv ffytrtydr ghhnnnmm
          gtytrec cddddfg uyujjygfd hjjuuytrr ghthjjkkkk
        </p>
        <Button>
          <Link className={classes.btn} to="/reservations">Reserve a table</Link>
        </Button>
      </div>

    </header>
  );
};
export default Header;
