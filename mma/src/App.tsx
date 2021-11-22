import Routing from "./routing/Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import { AthleteProvider } from "./contexts/AthleteContext";

function App() {
  return (
    <div>
      <AthleteProvider>
        <Routing />
      </AthleteProvider>
    </div>
  );
}

export default App;
