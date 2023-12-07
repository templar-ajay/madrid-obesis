import Bounded from "@/components/Bounded";
import BootstrapCarousel from "@/components/BootstrapCarousel/BootstrapCarousel";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import BackgroundOfSmallImages from "@/components/BackgroundOfSmallImages";

type componentsType = ({}: any) => JSXMapSerializer;

const components: componentsType = ({ title_color, testimonial_color }) => {
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
          size="xxs"
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
    heading4: ({ children }) => {
      return (
        <Heading
          as="h4"
          size="sm"
          className="font-display text-center mb-4"
          color={title_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }) => (
      <Paragraph
        className="text-center text-lg md:text-xl text-black-500 mt-8 mb-10"
        color={testimonial_color}
      >
        {children}
      </Paragraph>
    ),
  };
};

/**
 * Props for `Reviews`.
 */
export type ReviewsProps = SliceComponentProps<Content.ReviewsSlice>;

/**
 * Component for "Reviews" Slices.
 */
const Reviews = ({ slice }: ReviewsProps): JSX.Element => {
  // @ts-ignore
  const backgroundOfSmallImagesUID =
    slice.primary.background_of_small_images?.uid;

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const lastSlideIndex = slice.items.length - 1;

  // function handleCurrentSlide(cmd: string): any {
  //   if (cmd == "next") {
  //     if (currentSlide >= lastSlideIndex) {
  //       setCurrentSlide(0);
  //     } else {
  //       setCurrentSlide(currentSlide + 1);
  //     }
  //   } else if (cmd == "prev") {
  //     if (currentSlide <= 0) {
  //       setCurrentSlide(lastSlideIndex);
  //     } else {
  //       setCurrentSlide(currentSlide - 1);
  //     }
  //   }
  // }

  return (
    <section className="relative">
      <PrismicNextImage
        className="absolute -z-20 w-full h-full object-cover"
        loading="lazy"
        field={slice.primary.background_image}
      />
      {backgroundOfSmallImagesUID && (
        <BackgroundOfSmallImages uid={backgroundOfSmallImagesUID} />
      )}
      <Bounded
        as="div"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="max-w-2xl mx-auto">
          <PrismicRichText
            field={slice.primary.title}
            components={components({
              title_color: slice.primary.title_color,
              testimonial_color: slice.primary.testimonial_color,
            })}
          />
        </div>
        <PrismicNextImage field={slice.primary.image} className="mx-auto" />

        <BootstrapCarousel
          items={slice.items}
          color={slice.primary.testimonial_color}
        />
      </Bounded>
    </section>
  );
};

export default Reviews;
