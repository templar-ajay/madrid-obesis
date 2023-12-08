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
          size="xs"
          className="font-body mb-2"
          color={title_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }) => (
      <Paragraph
        className="text-lg md:text-xl text-black-500 mt-2 mb-10"
        color={text_color}
      >
        {children}
      </Paragraph>
    ),
  };
};

/**
 * Props for `Section2`.
 */
export type Section2Props = SliceComponentProps<Content.Section2Slice>;

/**
 * Component for "Section2" Slices.
 */
const Section2 = ({ slice }: Section2Props): JSX.Element => {
  // @ts-ignore
  const backgroundOfSmallImagesUID =
    slice.primary.background_of_small_images?.uid;

  if (slice.variation == "default") {
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
          className="max-w-5xl mx-auto"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          {Boolean(slice?.primary?.transition_in_image?.url) && (
            <>
              <div className="mt-[200px]"></div>
              <div className="transition-div absolute top-0 left-0 w-full">
                <PrismicNextImage
                  field={slice.primary.transition_in_image}
                  className="w-full"
                />
              </div>
            </>
          )}
          <div className="title-div mb-[4rem]">
            <PrismicRichText
              field={slice.primary.title}
              components={components({
                title_color: slice.primary.title_color,
                text_color: slice.primary.text_color,
              })}
            />
          </div>
          {/* repeatable zone elements */}
          <div className="key-points-div ml-[3rem] sm:ml-[6rem] md:ml-[8rem] mx-[1rem] sm:mx-[2rem] md:mx-[5rem]">
            {slice.items.map(({ heading, description }, index) => (
              <div key={"heading-" + index}>
                <div className="icon-div absolute -translate-x-10 sm:-translate-x-14">
                  <PrismicNextImage
                    className="max-w-[25px] sm:max-w-[40px]"
                    field={slice.primary.key_point_icon}
                  />
                </div>
                <PrismicRichText
                  field={heading}
                  components={components({
                    title_color: slice.primary.title_color,
                    text_color: slice.primary.text_color,
                  })}
                />
                <div className="description-div mb-8">
                  <PrismicRichText
                    key={"description" + index}
                    field={description}
                    components={components({
                      title_color: slice.primary.title_color,
                      text_color: slice.primary.text_color,
                    })}
                  />
                </div>
              </div>
            ))}
            <div className="w-full pr-[1rem] xs:pr-[2rem] sm:pr-[4rem] md:[3rem]">
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
          </div>

          {Boolean(slice?.primary?.transition_out_image?.url) && (
            <>
              <div className="mt-[200px]"></div>
              <div className="transition-div absolute bottom-0 left-0 w-full">
                <PrismicNextImage
                  field={slice.primary.transition_out_image}
                  className="w-full"
                />
              </div>
            </>
          )}
        </Bounded>
      </div>
    );
  } else if (slice.variation == "pointBlocks") {
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
          className="max-w-5xl mx-auto"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          {Boolean(slice?.primary?.transition_in_image?.url) && (
            <>
              <div className="mt-[200px]"></div>
              <div className="transition-div absolute top-0 left-0 w-full">
                <PrismicNextImage
                  field={slice.primary.transition_in_image}
                  className="w-full"
                />
              </div>
            </>
          )}
          <div className="title-div mb-[4rem]">
            <PrismicRichText
              field={slice.primary.title}
              components={components({
                title_color: slice.primary.title_color,
                text_color: slice.primary.text_color,
              })}
            />
          </div>
          {/* repeatable zone elements */}
          <div className="key-points-div mx-[1rem] sm:mx-[2rem] md:mx-[5rem]">
            {slice.items.map(({ heading, description }, index) => (
              <div
                key={"heading-" + index}
                style={{
                  background:
                    slice.primary.key_point_background_color ||
                    "rgba(31, 41, 55, 0.8)",
                }}
                className="bg-gray-800/80 flex flex-wrap mobile:flex-nowrap gap-y-4 rounded-xl my-10 pt-5"
              >
                <div
                  style={{ width: "50px" }}
                  className="mx-auto -translate-x-4 mobile:translate-x-0"
                >
                  <div className="icon-div block">
                    <div
                      style={{
                        background:
                          slice.primary.index_number_background_color ||
                          "rgba(55, 65, 81, 0.8)",
                      }}
                      className="max-w-[25px] sm:max-w-[40px] text-3xl md:text-5xl pr-[47px] md:pr-[66px] p-3 mt-1 ml-4 rounded-xl text-white"
                    >
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                    </div>
                  </div>
                </div>
                <div className="block ml-[40px] md:ml-[56px] pr-5">
                  <PrismicRichText
                    field={heading}
                    components={components({
                      title_color: slice.primary.title_color,
                      text_color: slice.primary.text_color,
                    })}
                  />
                  <div className="description-div mb-8">
                    <PrismicRichText
                      key={"description" + index}
                      field={description}
                      components={components({
                        title_color: slice.primary.title_color,
                        text_color: slice.primary.text_color,
                      })}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full max-w-xl mx-auto md:[3rem]">
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
          </div>

          {Boolean(slice?.primary?.transition_out_image?.url) && (
            <>
              <div className="mt-[200px]"></div>
              <div className="transition-div absolute bottom-0 left-0 w-full">
                <PrismicNextImage
                  field={slice.primary.transition_out_image}
                  className="w-full"
                />
              </div>
            </>
          )}
        </Bounded>
      </div>
    );
  }
};

export default Section2;
