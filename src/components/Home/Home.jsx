import { useEffect, useState } from "react";
import React from "react";
import ApodCard from "./ApodCard";

export default function Home() {
  const [apod, setApod] = useState({});
  //get today's date
  const today = new Date().toISOString().split("T")[0];
  //inital value is today's date which is a string
  const [date, setDate] = useState(today);
  const [error, setError] = useState("");
  const [wait, setWait] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  //Use useEffect to render on page load and date change
  useEffect(() => {
    async function getData() {
      setWait("Please wait...");
      try {
        const res = await fetch(`${BASE_URL}?api_key=${API_KEY}&date=${date}`);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setApod(data);
        setError("");
        setWait("");
      } catch (error) {
        console.log(error);
        setError("Did not get the Pic of the Day");
      }
    }
    getData();
  }, [date]);

  return (
    <div className="wrapper">
      <h1>NASA Astronomy Picture of the Day</h1>

      <div className="search">
        <input
          type="date"
          //prevent future dates from being selected
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      {/* prevent card from loading unless there is a date selected and the API has successfully returned data w/ short circuit */}
      {apod.date && (
        <ApodCard
          date={apod.date}
          title={apod.title}
          url={apod.url}
          explanation={apod.explanation}
          media_type={apod.media_type}
        />
      )}
      {/* short circuit: If wait value is not falsey, render wait value */}
      {wait && <p>{wait}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
