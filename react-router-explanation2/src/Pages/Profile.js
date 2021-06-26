import React, { useContext } from "react";
import { GlobalContext } from "../providers/GlobalContext";

const Profile = () => {
  const { state, setState } = useContext(GlobalContext);
  console.log(state);
  return (
    <>
      <h1>Profile Page</h1>

      <button
        onClick={(e) =>
          setState((prevState) => ({ ...prevState, isDark: !state.isDark }))
        }
      >
        Dark mode
      </button>
    </>
  );
};

export default Profile;
