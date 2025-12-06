import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {
  p: ({ children }) => <p className="text-justify">{children}</p>,
}
 
export function useMDXComponents(): MDXComponents {
  return components
}