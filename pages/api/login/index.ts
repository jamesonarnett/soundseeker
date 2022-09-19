import type { NextApiRequest, NextApiResponse } from "next";
import {
  BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  generateRandomString,
} from "../../../utils/index";

const request = require("request");
const querystring = require("node:querystring");

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };
  if (req.method === "GET") {
    // request.post(
    //   authOptions,
    //   (
    //     error: any,
    //     response: { statusCode: number },
    //     body: { access_token: any }
    //   ) => {
    //     if (!error && response.statusCode === 200) {
    //       const token = body.access_token;
    //       const options = {
    //         url: "https://api.spotify.com/v1/users/316r5v7mgjcvzrynppzxxcck5w3y",
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //         json: true,
    //       };
    //       request.get(options, (_: any, response: any, body: any) => {
    //         if (!error) {
    //           res.status(200).json(body);
    //         }
    //       });
    //     }
    //   }
    // );
    const state = generateRandomString(16);
    const scope = "user-read-private user-read-email";
    const REDIRECT_URI = `${BASE_URL}`;
    res.redirect(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: CLIENT_ID,
          scope: scope,
          redirect_uri: REDIRECT_URI,
          state: state,
        })
    );
  }
}
