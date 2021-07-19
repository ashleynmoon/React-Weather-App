import React from "react";
import './App.css';

export default function FormattedDate(props){
    return "Sunday June 6 ~ 9:00PM";
function formatDate(timestamp){
let now = new Date(timestamp);
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let hour = now.getHours();
let daytime = "AM"
if (hour > 12){
  daytime = "PM";
}
if (hour > 12){
hour =`${hour}`-12;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currently = `${day}, ${month} ${date} ~ ${hour}:${minutes} ${daytime}`;
console.log(currently);
return `${currently}`;

}
}