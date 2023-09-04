import { ImageResponse } from "next/server";

export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";
export default async function og() {
  return new ImageResponse(
    (
      <div style={{ display: "flex" }}>
        <img src="../assets/portfoliov1.png" alt="portfolio main page"></img>
      </div>
    ),
    size
  );
}
