import AfterCtaText from "@/components/AfterCtaText";
import BackgroundOfSmallImages from "@/components/BackgroundOfSmallImages";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
type componentsType = ({}: any) => JSXMapSerializer;

const components: componentsType = ({
  bond_color,
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
          color={bond_color}
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
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const backgroundOfSmallImagesUID =
    //@ts-ignore
    slice.primary.background_of_small_images?.uid;

  // let BackgroundOfImages;

  // const uidOfBackgroundOfSmallImages =
  //   slice.primary.background_of_small_images?.uid;
  // console.log("uid of backgroundOfSmallImages", uidOfBackgroundOfSmallImages);

  // if (uidOfBackgroundOfSmallImages) {
  //   const client = createClient();
  //   const the_background_of_small_images = await client.getByUID(
  //     "background_of_small_images",
  //     uidOfBackgroundOfSmallImages
  //   );

  //   BackgroundOfImages = the_background_of_small_images?.data;
  //   console.log("background of images", BackgroundOfImages);
  // }

  return (
    <section className="relative w-full">
      <PrismicNextImage
        className="absolute -z-20 w-full h-full object-cover"
        loading="eager"
        field={slice.primary.background_image}
      />
      <PrismicNextImage
        className="absolute -z-20 w-full h-full object-cover visible mobile:hidden"
        loading="eager"
        field={slice.primary.background_image_for_mobile_devices}
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
        <div className="pt-[4rem] sm:pt-[6rem]"></div>
        <div className="bond-div uppercase">
          <PrismicRichText
            field={slice.primary.bond}
            components={components({
              header_color: slice.primary.header_color,
              sub_header_color: slice.primary.sub_header_color,
              bond_color: slice.primary.bond_color,
            })}
          />
        </div>
        <div className="header-div">
          <PrismicRichText
            field={slice.primary.header}
            components={components({
              header_color: slice.primary.header_color,
              sub_header_color: slice.primary.sub_header_color,
              bond_color: slice.primary.bond_color,
            })}
          />
        </div>
        <div className="subheader-div mx-[0rem] mobile:mx-[2rem] md:mx-[5rem]">
          <PrismicRichText
            field={slice.primary.sub_header}
            components={components({
              header_color: slice.primary.header_color,
              sub_header_color: slice.primary.sub_header_color,
              bond_color: slice.primary.bond_color,
            })}
          />
        </div>
        <div className="mx-[0rem] mobile:mx-[2rem] md:mx-[8rem]">
          <div className="image-div">
            <PrismicNextImage field={slice.primary.image} className="py-4" />
          </div>
          <div className="cta-div mx-auto max-w-xl ">
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
              color={slice.primary.sub_header_color}
            />
          </div>
        </div>
        <div className="key-points-div mt-8 flex justify-center gap-8 flex-wrap">
          {slice.items.map(({ key_point_image }, index) => (
            <PrismicNextImage
              key={"item-" + index}
              field={key_point_image}
              className="max-w-[93px] md:max-w-[150px]"
            />
          ))}
        </div>
        {Boolean(slice?.primary?.transition_image?.url) && (
          <>
            <div className="transition-div absolute bottom-0 left-0 w-full">
              <PrismicNextImage
                field={slice.primary.transition_image}
                className="w-full"
              />
            </div>
            <div className="pb-[80px] sm:pb-[100px] md:pb-[200px]"></div>
          </>
        )}
      </Bounded>
    </section>
  );
};

export default Hero;
