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
function addRandomQuote() {
    const quotes =
        ['You talking to me? - Taxi Driver, 1976', 
        'To infinity and beyond! -Toy Story, 1995', 
        'Life is a banquet, and most poor suckers are starving to death! -Auntie Mame, 1958', 
        'Jessica, only child, Illinois, Chicago. -Parasite, 2019'];
  
    // Pick a random quote.
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
    // Add it to the page.
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quote;
  }