import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection } from "firebase/firestore";

//React Components
import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";

//Images & SVGs
import gameImg1 from './images/space-waldo.jpg';
import gameImg2 from './images/ski-waldo.jpg';

//Styles
import './styles/App.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Arhz8cd9xErbGLPmI4Nj7OpFKdCafiM",
  authDomain: "where-s-waldo-6a910.firebaseapp.com",
  projectId: "where-s-waldo-6a910",
  storageBucket: "where-s-waldo-6a910.appspot.com",
  messagingSenderId: "823428402518",
  appId: "1:823428402518:web:9b245b77ba20b3833e9af7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const gameOneData = doc(db,"scoring/game-one");
const gameTwoData = doc(db,"scoring/game-two");
const gameOneLB = collection(db, "game-one-leaderboard")
const gameTwoLB = collection(db, "game-two-leaderboard")

function App() {

  return (
    <div className="App">
      <Router>

        <div className="main-content">
          <Routes>
              <Route exact path="/" element={<Home gameImg1={gameImg1} gameImg2={gameImg2}/>}/>
              <Route exact path="/leaderboard" element={<Leaderboard lb1={gameOneLB} lb2={gameTwoLB}/>}/>
              <Route exact path="/game-1" element={<Game gameImg={gameImg1} gameData={gameOneData} scoreData={gameOneLB}/>}/>
              <Route exact path="/game-2" element={<Game gameImg={gameImg2} gameData={gameTwoData} scoreData={gameTwoLB}/>}/>
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
