/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const productSlugs = [
      "dutinkove-polykarbonaty",
      "plne-polykarbonaty",
      "hpl-bond-dosky",
      "prislusenstvo",
      "trapezy-vlnovky",
      "skleniky"
    ];
    return productSlugs.map((slug) => ({
      source: "/produkty",
      has: [{ type: "query", key: "service", value: slug }],
      destination: `/produkty/${slug}`,
      permanent: true
    }));
  }
};

export default nextConfig;
