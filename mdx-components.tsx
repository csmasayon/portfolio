import type { MDXComponents } from 'mdx/types'
import Link from 'next/link';
 
const components: MDXComponents = {
    h1: ({ children }) => <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h1>,
    h2: ({ children }) => <h2 className="scroll-m-20 text-xl tracking-tight text-muted-foreground">{children}</h2>,
    h3: ({ children }) => <h3 className="scroll-m-20 text-md tracking-tight underline hover:text-primary/80 transition-colors">{children}</h3>,
    p: ({ children }) => <p className="mb-4 text-justify">{children}</p>,
    li: ({ children }) => <li className="mb-2 text-justify">{children}</li>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-justify">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-justify">{children}</ol>,
    blockquote: ({ children }) => <blockquote className="border-l-2 border-primary/20 pl-4 mb-4 text-justify">{children}</blockquote>,
    code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-800 text-sm p-1 rounded-md">{children}</code>,
    pre: ({ children }) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">{children}</pre>,
}
 
export function useMDXComponents(): MDXComponents {
  return components
}