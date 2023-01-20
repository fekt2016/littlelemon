import BookingForm from "./BookingForm";
import classes from "./BookingPage.module.css";

const BookingPage = () => {
  const HandleAvailableTime = (reserveData) => {
    console.log(reserveData);


  };
  return (
    <section className={classes.bookingpage}>
      <h2 className={classes["booking-heading"]}>Reserve a table</h2>
      <BookingForm onAvailableTime={HandleAvailableTime} />
    </section>
  );
};

export default BookingPage;
