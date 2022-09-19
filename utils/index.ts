export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;

//
export const generateRandomString = (myLength: number) => {
  const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: myLength },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );

  const randomString = randomArray.join("");
  return randomString;
};
