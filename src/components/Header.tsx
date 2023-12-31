import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

type HeaderProps = {
  uid: string;
};

export default async function Header({ uid }: HeaderProps) {
  const client = createClient();

  const header = await client.getByUID("header_reusable", uid);
  const settings = await client.getSingle("settings");
  const { secondary_color } = settings.data;
  // console.log("header", header);

  const {
    data: {
      background_color,
      logo,
      cta_icon,
      cta_message,
      cta_phone,
      cta_link,
      cta_text_color,
    },
  } = header;

  return (
    <>
      <header
        className="w-full absolute top-0 z-10"
        style={{
          backgroundColor: background_color || "transparent",
        }}
      >
        <div className="flex justify-between items-center px-3 sm:px-5 py-3 mx-auto max-w-[1124px]">
          <div className="logo h-fit">
            <Link href="/">
              <PrismicNextImage
                field={logo}
                style={{
                  objectFit: "contain",
                }}
                loading="eager"
                className=" w-[120px] h-[50px] sm:h-[55px] xs:w-[150px] sm:w-full"
              />
            </Link>
          </div>
          <PrismicNextLink field={cta_link}>
            <div className="cta h-fit">
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="block w-[25px] sm:w-[35px]">
                  <PrismicNextImage
                    className="w-[25px] sm:w-[35px]"
                    field={cta_icon}
                    // loading="eager"
                  />
                </div>
                <div className="block">
                  <div
                    style={{
                      color: cta_text_color || secondary_color || "#202020",
                    }}
                    className="block text-sm xs:text-md sm:text-xl"
                  >
                    {cta_message}
                  </div>
                  <div
                    style={{
                      color: cta_text_color || secondary_color || "#202020",
                    }}
                    className="block text-md sm:text-xl"
                  >
                    {cta_phone}
                  </div>
                </div>
              </div>
            </div>
          </PrismicNextLink>
        </div>
      </header>
    </>
  );
}
