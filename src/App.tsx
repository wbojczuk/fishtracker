import { useState } from "react";
import AllFish from "./components/AllFish/AllFish";
import Header from "./components/Header/Header";
import getFishData from "./controllers/getFishData";
import Footer from "./components/Footer/Footer";

export default function App(){
  const [fishData, setFishData] = useState(getFishData())
  return(
    <>
    <Header fishData={fishData} />
    <AllFish setFishData={setFishData} fishData={fishData} />
    <Footer />
    </>
  )
}