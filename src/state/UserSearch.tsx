import { useState } from "react";

const users = [
  { name: "John", age: 28 },
  { name: "Alex", age: 28 },
  { name: "Michael", age: 28 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      UserSearch
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <h2>
        {user && user.name} - {user && user.age}
      </h2>
    </div>
  );
};

export default UserSearch;
