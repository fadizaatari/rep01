import { useParams } from "react-router-dom";

function Users() {
  const user = useParams();

  let error = false;
  let choice;
  const ar = ["1", "2", "3"];
  if (ar.includes(user.userId)) {
    choice = "User is: " + user.userId;
    error = false;
  } else {
    choice = "Invalid Users";
    error = true;
  }

  const classNameColor = error ? "text-red-500" : "text-white";

  return (
    <>
      <Header />
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 h-screen">
        <p className={classNameColor + " text-7xl text-center font-roboto"}>
          {choice}
        </p>
      </div>
    </>
  );
}

export default Users;
