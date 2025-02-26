import Header from "../components/Header";
import Game from "../components/TicTacToeGame";

function TicTacToe() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 h-screen">
        <Game />
      </div>
    </>
  );
}

export default TicTacToe;
