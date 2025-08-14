import { Helmet } from "react-helmet";

/**
 * SEO component for managing HTML metadata using react-helmet.
 *
 * This component sets the page title, meta description, Open Graph tags,
 * and optional keywords and image tags for enhanced SEO and social sharing.
 *
 * @param {string} title - The title of the current page.
 * @param {string} description - A brief description of the page for search engines and social media.
 * @param {string} [keywords] -  Comma-separated keywords relevant to the page content.
 * @param {string} [image="https://morganstatesacs.org/sacs-logo-vertical.svg"] - Optional Open Graph image URL for social sharing previews.
 */
const SEO = ({ title, description, keywords, image = "https://morganstatesacs.org/sacs-logo-vertical.svg" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default SEO;
