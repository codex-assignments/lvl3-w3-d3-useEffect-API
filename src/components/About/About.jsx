import React from "react";

export default function About() {
  return (
    <>
          <h1>About This App</h1>
          <div className="wrapper">
              
          <p> This app was built with React using Vite build tool and is powered by NASA's open use APOD API. </p>
          <p>
              This was a project for Code x Academy Lvl3
          </p>
          <p>
              The useEffect hook was used to synch component state with API data which will trigger renders on page load and user-activated date change.
          </p>
          <p>
              The useState hook and props are used to store and pass the date to the API fetch request and then to pass the fetched data to the render components 
              </p>
              <p>
                  Browser Router was installed and used to render different components as "pages", Home and About, without a page reload.
              </p>
              <p>
                  The NASA APOD API requires an Api key which is saved in vite environmental variables, to keep the key out of the source code. 
              </p>
              <p>
                  Google Gemini was used to help generate the css.
              </p>
              <p>
                  This repo was deployed to github pages using the gh-pages package.
              </p>
          </div>
    </>
  );
}
