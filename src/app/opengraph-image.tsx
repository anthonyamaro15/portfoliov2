import { ImageResponse } from "next/server";
import Image from "next/image";

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
        <Image src="/public/portfoliov1.png" alt="portfolio main page" />
      </div>
    ),
    size
  );
}
