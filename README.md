
This app uses NASA's APOD API to render the current date's picture of the day on page load, and with the user-activated date change will render other dates' APOD as well. 

App.jsx uses Browser Router to render two different pages and provides the outline for the app. 

Home.jsx is the "page" that handles the APOD data fetch and render, using useEffect hook and useState hooks to store and pass the date to fetch data function on page load and date change.
The ApodCard component will render if there is data from the fetch function and that data is passed through props.
The fetched data media_type drives how the media is displayed, photo or video.

To run this app:

git clone <your-repository-url>
cd nasa-apod-explorer
npm install

You can run with the localhost, launched with terminal command 
npm run dev 

The .env.sample file contains information for running the vite env stored variables (found at import.meta.env).

VITE_API_KEY=your_api_key_here
VITE_BASE_URL=https://api.nasa.gov/planetary/apod

Otherwise, this app has been deployed to github pages. 