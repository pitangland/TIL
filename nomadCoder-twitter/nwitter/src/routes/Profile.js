import React from "react";
import { authService } from "fBase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };

  return (
    <>
      <button onClick={onLogOutClick}>LogOut</button>
    </>
  );
};

export default Profile;
