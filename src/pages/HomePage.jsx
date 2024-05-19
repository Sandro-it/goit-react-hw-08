import DocTitle from "../components/docTitle/DocTitle";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { useState } from "react";

const Home = () => {
  const [isHoveredLog, setIsHoveredLog] = useState(false);
  const [isHoveredReg, setIsHoveredReg] = useState(false);

  const handleMouseEnterLog = () => {
    setIsHoveredLog(true);
  };

  const handleMouseLeaveLog = () => {
    setIsHoveredLog(false);
  };

  const handleMouseEnterReg = () => {
    setIsHoveredReg(true);
  };

  const handleMouseLeaveReg = () => {
    setIsHoveredReg(false);
  };

  const { isLoggedIn } = useAuth();

  return (
    <div
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "0 20px",
        position: "relative",
      }}
    >
      <DocTitle> ContactsBook</DocTitle>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "1.2rem",
        }}
      >
        Welcome to the ContactsBook!
      </h1>
      {isLoggedIn ? (
        <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
          Manage your contacts{" "}
        </p>
      ) : (
        <>
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            To use ContactsBook, please Log in or Register.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "30px" }}
          >
            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "10px 20px",
                backgroundColor: isHoveredLog ? "#8590c0" : "#b3b8ce",
                border: "1px solid black",
                borderRadius: "20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onMouseEnter={handleMouseEnterLog}
              onMouseLeave={handleMouseLeaveLog}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                color: "black",
                backgroundColor: isHoveredReg ? "#8590c0" : "#b3b8ce",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                border: "1px solid black",
              }}
              onMouseEnter={handleMouseEnterReg}
              onMouseLeave={handleMouseLeaveReg}
            >
              Register
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
