import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((r) => r.json())
      .then(setUser)
      .catch(console.error);
  }, [id]);

  if (!user) return <h1>Loading...</h1>;

  return (
    <>
      <header><NavBar /></header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
}

export default UserProfile;
