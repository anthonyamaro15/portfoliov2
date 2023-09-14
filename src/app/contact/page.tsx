import Footer from "../footer/footer";
import "./contact.scss";

const Page = () => {
  return (
    <div className="main-container">
      <div className="content contact">
        <h1>Contact</h1>
        <p>
          Get in touch or send me and email directly on{" "}
          <a href="mailto:anthonyamaro5555@gmail.com">
            anthonyamaro5555@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
