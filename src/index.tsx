import ReactDOM from "react-dom/client";
//import EventComponent from "./events/EventComponent";
import UserSearch from "./classes/UserSearch";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);
const users = [
  { name: "John", age: 28 },
  { name: "Alex", age: 28 },
  { name: "Michael", age: 28 },
];

const App = () => {
  return (
    <div>
      <UserSearch users={users} />
    </div>
  );
};

root.render(<App />);
