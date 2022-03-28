import "./App.css";
// import writers from "./writers";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";
import ProfileForm from "./components/ProfileForm";

function App() {
  const [allProfile, setAllProfile] = useState([
    {
      firstName: "Hannah",
      lastName: "Montana",
      email: "hannah.montana@email.com",
      phone: "+233 024 455 000",
    },
  ]);

  const submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllProfile(arr);
  };

  return (
    <div>
      <h1>Writer Profiles</h1>
      <div className="container">
        <ProfileForm submit={submit} />
        {allProfile.map((writer) => (
          <ProfileCard key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
  );
}

export default App;
