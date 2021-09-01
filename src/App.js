import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="container">
      <header className="m-5 text-center">
        <h1>Test Grafana Web</h1>
      </header>
      <div className="col-12">
        <Dashboard
          title="Consumo de CPU"
          panelId="7"
        />
      </div>
      <div className="col-12">
        <Dashboard
          title="Carga del Sistema"
          panelId="13"
        />
      </div>
    </div>
  )
}

export default App;
