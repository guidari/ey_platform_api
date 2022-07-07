import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
};

const headers = {
  Accept: "application/json, text/plain, */*",
  Authorization:
    "Basic M3A1TFpudEdacFdsTWlGeWRqbk5lVDFTWW40a0lhakx2Y1NyMUZINTpBTXdMdVFaMWMzN05xTUZVMTJybDVtV2cwNXFsYUhHQzF3YndOZnlHUExIUFV6T1FGSmdLc3pDeW5yOVZGYWRsd01yQ2JiY2pqOU9nb0JBeG1zaHNBdDIxWVpMeEdlWW1LTlFOM3o0SjJDQjVLU05YZTRTR1Fld1RWd29JSXRpTA==",
  "Content-Type": "application/json;charset=utf-8",
};

const fetchOptions = {
  method: "GET",
  headers,
};

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

const port = process.env.port || 3333;
app.listen(port, () => console.log("Server is running on port ", port));
