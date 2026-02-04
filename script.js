const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const statusEl = document.getElementById("status");

const API_URL = "https://dummyjson.com/quotes/random";

function setStatus(msg = "") {
  statusEl.textContent = msg;
}

function setLoading(isLoading) {
  newQuoteBtn.disabled = isLoading;
  copyBtn.disabled = isLoading;
  newQuoteBtn.textContent = isLoading ? "Loading..." : "New Quote";
}

async function fetchQuote() {
  try {
    setStatus("");
    setLoading(true);

    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const data = await res.json();
    quoteEl.textContent = `“${data.quote}”`;
    authorEl.textContent = `— ${data.author}`;
  } catch (err) {
    quoteEl.textContent = "Could not fetch a quote right now.";
    authorEl.textContent = "— Try again";
    setStatus(err.message);
  } finally {
    setLoading(false);
  }
}

async function copyQuote() {
  const quoteText = `${quoteEl.textContent} ${authorEl.textContent}`.trim();
  try {
    await navigator.clipboard.writeText(quoteText);
    setStatus("Copied ✅");
    setTimeout(() => setStatus(""), 1200);
  } catch {
    setStatus("Copy failed (browser blocked clipboard).");
  }
}

newQuoteBtn.addEventListener("click", fetchQuote);
copyBtn.addEventListener("click", copyQuote);

fetchQuote();
