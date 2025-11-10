export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Let the page component handle prose styling
    return <>{children}</>;
  }