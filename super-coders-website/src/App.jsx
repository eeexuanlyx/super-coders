import Contact from "./components/Contact";
import Header from "./components/Header";
import InquiryForm from "./components/InquiryForm";
import Services from "./components/Services";

function App() {
  return (
    <main className="font-inter bg-blue-950 text-white">
      <Header />
      <Services />
      <Contact />
      <InquiryForm />
    </main>
  );
}

export default App;
