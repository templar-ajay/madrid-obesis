import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Page() {
  const client = createClient();
  const page = await client
    .getByUID("landing_page", "homepage")
    .catch(() => notFound());

  const { header, footer } = page.data;
  // console.log("header", header);

  const settings = await client.getSingle("settings");
  const { default_footer, default_header } = settings.data;
  // console.log("default header", default_header);

  const headerUID =
    //@ts-ignore
    header?.uid ||
    //@ts-ignore
    default_header?.uid ||
    "please-select-a-default-header-in-settings-document";

  const footerUID =
    //@ts-ignore
    footer?.uid ||
    //@ts-ignore
    default_footer?.uid ||
    "please-select-a-default-footer-in-settings-document";

  return (
    <>
      <Header uid={headerUID} />
      <SliceZone slices={page.data.slices} components={components} />
      <Footer uid={footerUID} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("landing_page", "homepage")
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
