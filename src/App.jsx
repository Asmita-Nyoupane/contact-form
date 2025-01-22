import "./App.css";
import Form from "./components/form";

function App() {
  return (
    <div className="container">
      <header>Contact Form</header>
      {/* size can be sm, md,lg */}
      <Form size="md" />
    </div>
  );
}

export default App;
