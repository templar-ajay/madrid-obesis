"use client";
const IframeCSR = ({ cta_iframe }: any) => {
  console.log("cta_iframe_", cta_iframe);

  return (
    <>
      <div
        style={{ width: "100%", height: "100%" }}
        dangerouslySetInnerHTML={{
          __html: `
            ${cta_iframe}
            `,
        }}
      ></div>
    </>
  );
};

export default IframeCSR;
