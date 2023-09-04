import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./contact.scss";

const Page = () => {
  return (
    <div className="main-container">
      <Navbar />
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
