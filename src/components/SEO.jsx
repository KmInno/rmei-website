import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const defaultPageMeta = {
  title: "RMEI Uganda | Empowering Returned Missionary Entrepreneurs",
  description:
    "RMEI Uganda empowers returned missionaries through entrepreneurship training, mentorship, and startup funding to build sustainable businesses and jobs.",
  keywords:
    "RMEI Uganda, entrepreneurship Uganda, youth empowerment Uganda, startup funding Uganda, missionary entrepreneurs, Kampala business training",
  image: "https://www.rmeiug.org/images/hero-image.webp",
  type: "website",
};

const pageMeta = {
  "/": {
    title: "RMEI Uganda | Empowering Returned Missionary Entrepreneurs",
    description:
      "RMEI Uganda supports returned missionaries with entrepreneurship training, mentorship, and funding to build sustainable businesses and create jobs in Uganda.",
  },
  "/about": {
    title: "About RMEI Uganda | Mission and Vision",
    description:
      "Learn how RMEI Uganda equips returned missionaries with training, mentorship, and seed capital to launch ethical businesses and uplift communities.",
  },
  "/program": {
    title: "RMEI Programs | Training and Support",
    description:
      "Explore the RMEI Uganda program model, including entrepreneurship training, mentorship, and startup support for returned missionaries.",
  },
  "/impact": {
    title: "RMEI Impact | Jobs, Leadership and Growth",
    description:
      "See how RMEI Uganda creates measurable impact through entrepreneurship, jobs, leadership development, and sustainable economic growth.",
  },
  "/contact": {
    title: "Contact RMEI Uganda",
    description:
      "Get in touch with RMEI Uganda to partner, support a cohort, or learn more about the initiative.",
  },
};

function ensureMetaTag(attr, attrValue, key, value) {
  let tag = document.querySelector(`${attr}[${attrValue}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrValue, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", value);
}

function ensureLinkTag(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  type = "website",
  canonical,
  structuredData,
}) {
  const location = useLocation();
  const pathname = location.pathname;
  const pageData = pageMeta[pathname] || pageMeta["/"];

  const resolvedTitle = title || pageData.title || defaultPageMeta.title;
  const resolvedDescription = description || pageData.description || defaultPageMeta.description;
  const resolvedKeywords = keywords || defaultPageMeta.keywords;
  const resolvedImage = image || defaultPageMeta.image;
  const resolvedType = type || defaultPageMeta.type;
  const resolvedCanonical = canonical || `https://www.rmeiug.org${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = resolvedTitle;

    ensureMetaTag("name", "name", "description", resolvedDescription);
    ensureMetaTag("name", "name", "keywords", resolvedKeywords);
    ensureMetaTag("name", "name", "author", "Return Missionary Entrepreneur Initiative (RMEI)");
    ensureMetaTag("name", "name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    ensureMetaTag("name", "name", "googlebot", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    ensureMetaTag("name", "name", "theme-color", "#0f172a");

    ensureMetaTag("property", "property", "og:title", resolvedTitle);
    ensureMetaTag("property", "property", "og:description", resolvedDescription);
    ensureMetaTag("property", "property", "og:type", resolvedType);
    ensureMetaTag("property", "property", "og:url", resolvedCanonical);
    ensureMetaTag("property", "property", "og:image", resolvedImage);
    ensureMetaTag("property", "property", "og:site_name", "RMEI Uganda");
    ensureMetaTag("property", "property", "og:locale", "en_US");

    ensureMetaTag("name", "name", "twitter:card", "summary_large_image");
    ensureMetaTag("name", "name", "twitter:title", resolvedTitle);
    ensureMetaTag("name", "name", "twitter:description", resolvedDescription);
    ensureMetaTag("name", "name", "twitter:image", resolvedImage);

    ensureLinkTag("canonical", resolvedCanonical);

    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const cleanupScript = document.getElementById("structured-data");
      if (cleanupScript) {
        cleanupScript.remove();
      }
    };
  }, [resolvedCanonical, resolvedDescription, resolvedImage, resolvedKeywords, resolvedTitle, resolvedType, structuredData]);

  return null;
}
