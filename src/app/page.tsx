import Navbar from "./navbar/navbar";
import "./globals.css";

export default function Home() {
  return (
    <main className="main-container">
      <Navbar />
      {/* Main page intro will go here */}

      <div className="home-page-content">
        <h1>I'm Anthony Amaro</h1>
        <p>
          Experienced software engineer with a passion for unraveling complex
          problems and a proven track record of developing innovative solutions.
          Highly skilled in coding, debugging, and optimizing software
          applications for optimal performance. A dedicated lifelong learner,
          always staying current with the latest technologies to ensure the
          delivery of cutting-edge solutions. Excels in collaborating with
          cross-functional teams to deliver high-quality projects on time. Known
          for a strong problem-solving mindset and a commitment to driving
          excellence in software development
        </p>
      </div>
    </main>
  );
}
