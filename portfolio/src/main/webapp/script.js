// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Shows a random quotes to the page.
 */
async function addRandomQuote() {
    const responseFromServer = await fetch("/server-quotes");
    const jsonQuotes = await responseFromServer.json();
    // for test purpose
    console.log(jsonQuotes.taxi);
    console.log(jsonQuotes.toy);
    console.log(jsonQuotes.parasite);
 
    const quotes = [];
    quotes.push(jsonQuotes.taxi);
    quotes.push(jsonQuotes.toy);
    quotes.push(jsonQuotes.parasite);
    // Pick a random quote.
     const quote = quotes[Math.floor(Math.random() * quotes.length)];
   // Add it to the page.
     const quoteContainer = document.getElementById('quote-container');
     quoteContainer.innerText = quote;  
  }
 
  // Fetches the current date from the server and adds it to the page.
 async function showServerTime() {
   const responseFromServer = await fetch('/date');
   const textFromResponse = await responseFromServer.text();
 
   const dateContainer = document.getElementById('date-container');
   dateContainer.innerText = textFromResponse;
 }
 