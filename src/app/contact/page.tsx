import { RESOURCES } from "@/config/resources";
import "./contact.scss";
import JsonLd from "@/components/seo/JsonLd";

const Page = () => {
  return (
    <div className="main-container">
      <JsonLd
        id="ld-breadcrumb-contact"
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.anthonyamaro.dev/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.anthonyamaro.dev/contact" },
          ],
        }}
      />
      <div className="content contact">
        <h1>Contact</h1>
        <p>
          Get in touch or send me and email directly on{" "}
          <a href={`mailto:${RESOURCES.email}`}>{RESOURCES.email}</a>
        </p>
      </div>
      
    </div>
  );
};

export default Page;
