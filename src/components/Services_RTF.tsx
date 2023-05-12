import * as React from "react";
import { useEffect, useState } from "react";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";

interface MarkdownProps {
  [key: string]: any;
  children?: string;
  options?: MarkdownToJSX.Options;
}

type Variants = "Primary" | "Secondary" | "Tertiary";
type HeadingVariants = "Lead" | "Head" | "Sub" | "Flag" | "Brow";

export const Heading: { [K in HeadingVariants]?: string } = {
  Lead: "font-base text-xl text-gray-600 text-lead font-bold sm:text-leadMobile",
  Head: "font-base text-2xl mt-4 mb-2 text-gray-700 text-head  sm:text-headMobile",
  Sub: "font-base text-xl mt-4 mb-2 text-gray-700 sm:text-subMobile",
  Flag: "font-base text-lg mt-4 mb-2 text-gray-700 uppercase sm:text-flagMobile",
};

export const Button: { [K in Variants]?: string } = {
  Primary:
    "text-base text-white font-bold bg-brand-primary hover:bg-brand-secondary px-4 py-2 rounded-full inline-block",
  Secondary:
    "text-base text-brand-primary active:text-white font-bold bg-white hover:bg-brand-lighter active:bg-brand-secondary border border-brand-primary px-6 py-2 rounded-full inline-block",
};

export default function Services_RTF({
  children,
  className,
  options,
  ...props
}: MarkdownProps) {
  if (!children) return <></>;

  const [underlined, setUnderlined] = useState(children);
  const [underlineTagCount, setUnderlineTagCount] = useState(0);

  function transformChildren() {
    if (!underlined.includes("++")) return;

    const tag = underlineTagCount % 2 === 0 ? "<ins>" : "</ins>";
    setUnderlined(underlined.replace("++", tag));
    setUnderlineTagCount(underlineTagCount + 1);
  }

  transformChildren();
  useEffect(transformChildren, [underlined]);

  return (
    <Markdown
      className={className + " mb-6 sm:mb-8 text-brand-text-light"}
      children={underlined}
      options={
        options || {
          overrides: {
            a: {
              props: {
                className: "underline hover:no-underline text-brand-primary",
              },
            },
            h1: { props: { className: Heading.Lead } },
            h2: { props: { className: Heading.Head } },
            h3: { props: { className: Heading.Sub } },
            h4: { props: { className: Heading.Flag } },
            h5: { props: { className: Heading.Brow } },
            ol: {
              props: {
                className: "list-inside",
              },
            },
            ul: {
              props: {
                className: " pl-4 list-inside",
              },
            },
            p: {
              props: { className: "text-gray-600" },
            },
            strong: {
              props: { className: "text-gray-600" },
            },
            li: {
              props: { className: "text-gray-600 my-4" },
            },
          },
        }
      }
      {...props}
    />
  );
}
