import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";

// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }



export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res) => {*
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem id={user.id} name={user.nama} age={user.age} />
      ))}
    </div>
  );
};
