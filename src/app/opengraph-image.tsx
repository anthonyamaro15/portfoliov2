import { ImageResponse } from "next/server";
import Image from "next/image";
import portfolio from "../assets/portfoliov1.png";
export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";
export default async function og() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={portfolio} alt="portfolio main page" />
      </div>
    ),
    size
  );
}
