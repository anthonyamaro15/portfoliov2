import Navbar from "./navbar/navbar";

const Homee = () => {
  return <div>home page</div>;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      {/* Main page intro will go here */}
    </main>
  );
}
