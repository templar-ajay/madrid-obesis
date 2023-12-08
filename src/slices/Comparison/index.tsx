import AfterCtaText from "@/components/AfterCtaText";
import BackgroundOfSmallImages from "@/components/BackgroundOfSmallImages";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import { Card, CardFooter } from "@nextui-org/react";

type componentsType = ({}: any) => JSXMapSerializer;
const components: componentsType = ({
  header_color,
  sub_header_color,
}: any) => {
  return {
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="font-semibold text-center mb-4"
          color={header_color}
        >
          {children}
        </Heading>
      );
    },
    heading1: ({ children }: any) => {
      return (
        <Heading
          as="h1"
          size="xxs"
          className="font-light text-center mb-4"
          color={header_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h3"
          size="sm"
          className="font-body text-center mb-4"
          color={sub_header_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="text-center text-lg md:text-xl text-black-500 mt-8 mb-10"
        color={sub_header_color}
      >
        {children}
      </Paragraph>
    ),
  };
};

/**
 * Props for `Comparison`.
 */
export type ComparisonProps = SliceComponentProps<Content.ComparisonSlice>;

/**
 * Component for "Comparison" Slices.
 */
const Comparison = ({ slice }: ComparisonProps): JSX.Element => {
  const {
    primary: {
      background_image,
      background_of_small_images,
      after_cta_text,
      cta_text,
      cta_link,
      iframe,
      text_color,
      title,
      title_color,
    },
  } = slice;

  //@ts-ignore
  const backgroundOfSmallImagesUID = background_of_small_images?.uid;

  return (
    <section className="relative w-full">
      <PrismicNextImage
        className="absolute -z-20 w-full h-full object-cover"
        loading="eager"
        field={background_image}
      />

      {backgroundOfSmallImagesUID && (
        <BackgroundOfSmallImages uid={backgroundOfSmallImagesUID} />
      )}

      <Bounded
        as="div"
        // className="md:px-[12rem]"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="header-div">
          <PrismicRichText
            field={title}
            components={components({
              header_color: title_color,
              sub_header_color: text_color,
            })}
          />
        </div>

        <div className="image-div my-5">
          {slice.items.map(({ image_1, image_2 }, index) => (
            <>
              <div className="flex flex-wrap my-2">
                <div className="w-[50%] px-1">
                  <Card isFooterBlurred radius="none" className="border-none">
                    <PrismicNextImage field={image_1}></PrismicNextImage>
                    <CardFooter className="justify-between bg-gray-500/50 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-none rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny mx-auto text-white/80">Before</p>
                    </CardFooter>
                  </Card>
                </div>
                <div className="w-[50%] px-1">
                  <Card isFooterBlurred radius="none" className="border-none">
                    <PrismicNextImage field={image_2}></PrismicNextImage>
                    <CardFooter className="justify-between bg-gray-500/50 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-none rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny mx-auto text-white ">After</p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </>
          ))}
          {/* <PrismicNextImage field={slice.primary.image} className="py-4" /> */}
        </div>
        <div className="mx-[0rem] mobile:mx-[2rem] md:mx-[8rem]">
          <div className="cta-div mx-auto max-w-xl ">
            {cta_text?.length && (
              <Button cta_link={cta_link} iframe={iframe}>
                {cta_text}
              </Button>
            )}
            <AfterCtaText field={after_cta_text} color={text_color} />
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Comparison;
