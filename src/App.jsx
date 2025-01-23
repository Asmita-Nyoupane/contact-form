import "./App.css";
import Form from "./components/form";

function App() {
  return (
    <div className="container">
      <header>Contact Form</header>
      {/* you can define larger-form and smaller-form based on the need */}
      <div className="larger-form">
        <Form />
      </div>
    </div>
  );
}

export default App;
