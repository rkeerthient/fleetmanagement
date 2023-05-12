import * as React from "react";

const faqs = [
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function SubTopics({ data, name }: any) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Subtopics
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Here are other types of {name}
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {data.map((item: any, index: any) => (
                <div
                  key={index}
                  className="[&:not(:last-child)]:border-b-2 pb-4"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {item.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {item.description}
                  </dd>
                  <dd className="mt-4">
                    <a href={item.slug}>
                      <div className="mt-4 border rounded-full py-2 px-4 bg-gray-600 text-white w-fit hover:bg-white hover:text-gray-600 hover:border-gray-600 text-left">
                        Learn more
                      </div>
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
