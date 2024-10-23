import React, { useState, useEffect } from "react";
import "./app.css";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("October 25, 2024").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time">
      <span>{timeLeft.days || "0"} :</span>
      <span>{timeLeft.hours || "0"} :</span>
      <span>{timeLeft.minutes || "0"} :</span>
      <span>{timeLeft.seconds || "0"}</span>
    </div>
  );
}

function App() {
  useEffect(() => {
    const playAudio = () => {
      const audio = document.getElementById("background-audio");
      if (audio) {
        audio.muted = false; // Unmute the audio
        audio.play(); // Play the audio
      }
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div>
      <audio autoPlay loop muted id="background-audio">
        <source src="audio/DarkMusic.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <img src="images/main-logo-v2.png" alt="" id="main-logo-v2"></img>
      <a
        href="https://www.gofundme.com/f/445uqm-support-our-community-halloween-celebration?attribution_id=sl:dd41ca73-eb1e-413d-9d00-0f71314560a8&utm_campaign=man_sharesheet_ft&utm_content=amp8_c&utm_medium=customer&utm_source=native_options"
        className="donate-button"
      >
        <img src="images/donatebutton.png" alt="" id="donatebutton"></img>
      </a>
      <section className="timer">
        <CountdownTimer />
      </section>
      <section>
        <div className="eventdates">
          {" "}
          <img src="images/eventdates.png" alt="" id="eventdates"></img>
        </div>
      </section>
      <section>
        <section className="top-content">
          <p className="first-container">
            Venture into the domain where spirits linger and air is thick with
            mystery. As you cross through the threshold, prepare for an
            unforgettable journey through twisted hallways, ghostly whispers,
            and chilling encounters.
            <br></br>
            <br></br>
            Consider, once you enter, that there is no turning back. Keep your
            wits about you, hold fast onto your friends, and be wary of the
            horrors that await you. Will you escape unscathed, or will you be
            consumed.
            <br></br>
            <br></br>
            Enter, only if you dare.
          </p>
        </section>
        <h2 className="quote">
          "When there's no more room in Hell THE DEAD WILL WALK THE EARTH"
        </h2>
        <section className="mid-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.9473819358905!2d-117.36124029999999!3d34.1988208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c351d585e99fcb%3A0xfd33a11494f9da84!2s3256%20W%20Hyatt%20Rd%2C%20San%20Bernardino%2C%20CA%2092407!5e0!3m2!1sen!2sus!4v1727049546535!5m2!1sen!2sus"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="bottom-content">
          <section className="about">
            <h2 className="quote2">Who we are</h2>
            <p className="about-container">
              Haunt on Hyatt Road is a labor of love. We wanted to bring to life
              a ghastly experience to thrill seekers in the Inland Empire.
              Through this effort, we are committed to leaving a positive impact
              on our community. If you'd like to support our endeavors, please
              do not hesitate to click the donate button.
              
            </p>
            <div className="bottom">
              <a href="https://www.gofundme.com/f/445uqm-support-our-community-halloween-celebration?attribution_id=sl:dd41ca73-eb1e-413d-9d00-0f71314560a8&utm_campaign=man_sharesheet_ft&utm_content=amp8_c&utm_medium=customer&utm_source=native_options">
                <img 
                  src="images/donatebutton.png"
                  alt=""
                  id="donatebutton"
                  className="bottombutton"
                ></img>
              </a>
              </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
