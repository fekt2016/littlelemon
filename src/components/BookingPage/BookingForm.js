import React, { useState } from "react";
import classes from "./BookingForm.module.css";

const availableTime = [
  { value: "17:00", label: "17:00" },
  { value: "18:00", label: "18:00" },
  { value: "19:00", label: "19:00" },
  { value: "20:00", label: "20:00" },
  { value: "21:00", label: "21:00" },
  { value: "22:00", label: "22:00" },
];
const availableOccusion = [
  {value: 'Birthday', label: 'Birthday'},
  {value: 'Anniversary', label: 'Anniversary'}
]

const BookingForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredGuest, setEnteredGuest] = useState("");
  const [enteredOccasion, setEnteredOccasion] = useState("");

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const timeHandler = (e) => {
    setEnteredTime(e.target.value);
  };

  const numHandler = (e) => {
    setEnteredGuest(e.target.value);
  };

  const occasionHandler = (e) => {
    setEnteredOccasion(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const reserveData = {
      date: enteredDate,
      time: enteredTime,
      guest: enteredGuest,
      occasion: enteredOccasion,
    };
    props.onAvailableTime(reserveData);
    setEnteredDate("");
    setEnteredTime("");
    setEnteredGuest("");
    setEnteredOccasion("");
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label className={classes["reserve-label"]} htmlFor="res-date">
        Choose date
      </label>
      <input
        className={classes["reserve-input"]}
        value={enteredDate}
        type="date"
        id="res-date"
        onChange={dateHandler}
      />
      <label className={classes["reserve-label"]} htmlFor="res-time">
        Choose time
      </label>
      <select
        className={classes["reserve-select"]}
        value={enteredTime}
        id="res-time "
        onChange={timeHandler}
      >
        <option  value="Choose a time">Choose a time </option>
        {availableTime.map((time) => (
          <option key={time.label} value={time.value}>{time.label}</option>
        ))}
      </select>
      <label className={classes["reserve-label"]} htmlFor="guests">
        Number of guests
      </label>
      <input
        className={classes["reserve-input"]}
        value={enteredGuest}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={numHandler}
      />
      <label className={classes["reserve-label"]} htmlFor="occasion">
        Occasion
      </label>
      <select
        className={classes["reserve-select"]}
        id="occasion"
        onChange={occasionHandler}
        value={enteredOccasion}
      >
        <option value="Choose a Occusion">Choose a Occusion </option>
        {availableOccusion.map((occ) => (
          <option key={occ.label} value={occ.value}>{occ.label}</option>
        ))}
      </select>
      <button
        className={classes.btn}
        type="submit"
        value="Make Your reservation"
      >
        Reserve a table
      </button>
    </form>
  );
};

export default BookingForm;
