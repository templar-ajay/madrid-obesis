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

type componentsType = ({}: any) => JSXMapSerializer;

const components: componentsType = ({ title_color, text_color }) => {
  return {
    heading2: ({ children }) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="font-semibold text-center mb-4"
          color={title_color}
        >
          {children}
        </Heading>
      );
    },
    heading1: ({ children }) => {
      return (
        <Heading
          as="h1"
          size="xs"
          className="font-light text-center mb-4"
          color={title_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }) => {
      return (
        <Heading
          as="h3"
          size="sm"
          className="font-body text-center mb-4"
          color={title_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }) => (
      <Paragraph
        className="text-lg md:text-xl text-black-500 mt-8 mb-10"
        color={text_color}
      >
        {children}
      </Paragraph>
    ),
  };
};

/**
 * Props for `Section1`.
 */
export type Section1Props = SliceComponentProps<Content.Section1Slice>;

/**
 * Component for "Section1" Slices.
 */
const Section1 = ({ slice }: Section1Props): JSX.Element => {
  // @ts-ignore
  const backgroundOfSmallImagesUID =
    slice.primary.background_of_small_images?.uid;
  return (
    <div className="relative">
      <PrismicNextImage
        className="absolute -z-20 w-full h-full object-cover"
        field={slice.primary.background_image}
        loading="lazy"
      />
      {backgroundOfSmallImagesUID && (
        <BackgroundOfSmallImages uid={backgroundOfSmallImagesUID} />
      )}
      <Bounded
        as="section"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        {Boolean(slice?.primary?.transition_image_1?.url) && (
          <>
            <div className="transition-div absolute top-0 left-0 w-full">
              <PrismicNextImage
                field={slice.primary.transition_image_1}
                className="w-full"
              />
            </div>
            <div className="mt-[70px] sm:mt-[100px] md:mt-[200px]"></div>
          </>
        )}
        <div className="title-div mx-[1rem] sm:mx-[3rem] md:mx-[5rem] mb-10 md:mb-20">
          <PrismicRichText
            field={slice.primary.title}
            components={components({
              title_color: slice.primary.title_color,
              text_color: slice.primary.text_color,
            })}
          />
        </div>
        {Boolean(slice.primary.image) && (
          <div className="flex justify-center">
            <PrismicNextImage field={slice.primary.image} />
          </div>
        )}
        <div className="text-div max-w-3xl mx-auto">
          <PrismicRichText
            field={slice.primary.text}
            components={components({
              title_color: slice.primary.title_color,
              text_color: slice.primary.text_color,
            })}
          />
        </div>
        <div className="max-w-xl mx-auto">
          {slice.primary.cta_text?.length && (
            <Button
              cta_link={slice.primary.cta_link}
              iframe={slice.primary.iframe}
            >
              {slice.primary.cta_text}
            </Button>
          )}
          <AfterCtaText
            field={slice.primary.after_cta_text}
            color={slice.primary.text_color}
          />
        </div>
        {Boolean(slice?.primary?.transition_out_image?.url) && (
          <>
            <div className="transition-div absolute bottom-0 left-0 w-full">
              <PrismicNextImage
                field={slice.primary.transition_out_image}
                className="w-full"
              />
            </div>
            <div className="mt-[200px]"></div>
          </>
        )}
      </Bounded>
    </div>
  );
};

export default Section1;
