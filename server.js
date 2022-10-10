import cors from "cors";
import express from "express";
import fetch from "node-fetch";

const app = express();

app.use(cors());
const corsOptions = {
  // origin: "https://ey-platform.vercel.app",
  origin: [process.env.CORS_ANALYTICS, process.env.CORS_URL],
};

const headers = {
  Accept: "application/json, text/plain, */*",
  Authorization:
    "Basic dktKamlEbHE3NzhWYnhWd0pQMFAxdTY1b05aOEY0bEswTE02S2VLRjpBcFFPMzFhN0F5UTZuTzNJSTJqdzQ1N0ZNb0ZFdWowNktBYk1rQjFYZ1p4eXM3eE85VmRQcmk4UlJTcHQ3Y1VYcTZMOGlGdDNGOU5ZMm9mcThJUDk5NWx0VHc0UFZxQ1R4d2d1NWJES1BZckRqdm40bHd5MGZhMVAwRFk3dUpRNg==",
  "Content-Type": "application/json;charset=utf-8",
};

const fetchOptions = {
  method: "GET",
  headers,
};

console.log("url", process.env.CORS_URL);

const requestEndpoint = "https://www.udemy.com/api-2.0/";
// https://www.udemy.com/api-2.0/courses/?search=react

// This function runs if the http://localhost:5000/getData endpoint
app.get("/courses", cors(corsOptions), async (req, res) => {
  const response = await fetch(requestEndpoint + "courses", fetchOptions);

  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.get("/search", cors(corsOptions), async (req, res) => {
  const { name } = req.headers;

  const response = await fetch(
    requestEndpoint + "courses/?search=" + name,
    fetchOptions
  );
  const jsonResponse = await response.json();

  res.json(jsonResponse);
});

app.get("/mycourses", cors(corsOptions), async (req, res) => {
  const { id } = req.headers;

  const response = await fetch(requestEndpoint + "courses/" + id, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

const port = process.env.PORT || 3333;
app.listen(port, () => console.log("Server is running on port ", port));
