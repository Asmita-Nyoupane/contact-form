import "./App.css";
import Form from "./components/form";

function App() {
  return (
    <div className="container  px-10  flex flex-col justify-center gap-10 items-center h-screen">
      <header className="text-blue-800 text-4xl font-semibold md:text-5xl lg:text-6xl md:font-bold">
        Contact Form
      </header>
      {/* size can be sm, md,lg */}
      <Form size="sm" formClass={" w-8/12"} />
    </div>
  );
}

export default App;
