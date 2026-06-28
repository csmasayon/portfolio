export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christian Ace Masayon",
    url: "https://csmasayon.com",
    jobTitle: "Fullstack Web Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of the Philippines Mindanao",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Davao",
      addressCountry: "PH",
    },
    sameAs: [
      "https://www.linkedin.com/in/christian-ace-masayon/",
      "https://github.com/csmasayon",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
