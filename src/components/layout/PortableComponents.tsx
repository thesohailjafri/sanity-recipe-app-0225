import { getImageUrl } from '@/lib/sanity/util'
import { genSlug } from '@/lib/utils/generate'
import { Sanity } from '@/types'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
 const Components: Partial<PortableTextReactComponents> = {
  listItem: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-5">
        <li>{children}</li>
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-5">
        <li>{children}</li>
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
    link: ({ value, children }) => {
      return (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-600"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      return (
        // disable next Image warning as sanity image url is already optimized
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={getImageUrl(value)}
          alt={value?.alt}
          className="my-10 w-full h-auto object-cover rounded-xl"
        />
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1
        className="text-4xl font-bold mt-6"
        id={genSlug(
          typeof children?.toString() === 'string' ? children.toString() : '',
        )}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="text-3xl font-bold mt-5"
        id={genSlug(
          typeof children?.toString() === 'string' ? children.toString() : '',
        )}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-2xl font-semibold mt-4"
        id={genSlug(
          typeof children?.toString() === 'string' ? children.toString() : '',
        )}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className="text-xl font-medium mt-3"
        id={genSlug(
          typeof children?.toString() === 'string' ? children.toString() : '',
        )}
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-base pb-2 text-gray-800">{children}</p>
    ),
  },
}

type PortableComponentsProps = {
  value: Sanity.BlockContent
}

export const PortableComponents = ({ value }: PortableComponentsProps) => {
  return <PortableText components={Components} value={value} />
}
