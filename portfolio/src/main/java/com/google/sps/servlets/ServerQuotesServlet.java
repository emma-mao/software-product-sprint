// Copyright 2019 Google LLC
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

package com.google.sps.servlets;
// import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/server-quotes")
public final class ServerQuotesServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // define an ArrayList containing the quotes(String)
    ArrayList<String> quotes = new ArrayList<String>();
    quotes.add("You talking to me? - Taxi Driver, 1976");
    quotes.add("To infinity and beyond! - Toy Story, 1995");
    quotes.add("Jessica, only child, Illinois, Chicago. - Parasite, 2019");

    // Convert the quotes to JSON
    String json = convertToJson(quotes);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

   /**
   * Converts a ServerStats instance into a JSON string using manual String concatentation.
   */
   private String convertToJson(ArrayList<String> quotes) {
     String json = "{";
     //  for (int i = 0; i < quotes.size(); ++i) {
     //    json += "\"" + quotes.get(i) + "\"";
     //  }
     json += "\"taxi\": ";
     json += "\"" + quotes.get(0) + "\"";
     json += ", ";
     json += "\"toy\": ";
     json += "\"" + quotes.get(1) + "\"";
     json += ", ";
     json += "\"parasite\": ";
     json += "\"" + quotes.get(2) + "\"";
     json += "}";
     return json;
   }
  
  /**
   * Converts a ServerStats instance into a JSON string using the Gson library. Note: We first added
   * the Gson library dependency to pom.xml.
   */
  // private String convertToJsonUsingGson(ArrayList<String> quotes) {
  //   Gson gson = new Gson();
  //   String json = gson.toJson(quotes);
  //   return json;
  // }
}
