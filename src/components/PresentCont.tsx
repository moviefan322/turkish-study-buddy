import { useState, useEffect } from "react";
import { presentContinuousSentence, conjugateTurkishVerb } from "@/utils/presentContinuous";
import { verbs } from "@/data/vocab/verbs";
import { pronounPairs } from "@/data/vocab/pronounPairs";
import styles from "./PresentCont.module.css";

interface EnTurkPark {
  english: string;
  turkish: string;
}

const PresentCont = () => {
  const [english, setEnglish] = useState<string>("");
  const [turkish, setTurkish] = useState<string>("");
  const [showTurkish, setShowTurkish] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleGenerateWord = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomPronoun = pronounPairs[Math.floor(Math.random() * pronounPairs.length)];
    setEnglish(presentContinuousSentence(randomVerb.english, randomPronoun.english));
    setTurkish(conjugateTurkishVerb(randomVerb.turkish, randomPronoun.turkish));
    setShowTurkish(false);
    console.log(english, turkish);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue)

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.pageCard} d-flex flex-column justify-content-center align-items-center p-3`}>
        <h1 className='text-center'>Present Continuous Practice</h1>
        <hr />
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
          <div className="fs-1 d-flex flex-column justify-content-center align-items-center text-center mb-3">
            <div className='fw-bold'>İngilizce:</div>
            <div>{english && english}</div>{" "}
          </div>
          <div className="fs-1 d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <div className='fw-bold'>Türçke:</div>
            <input type="text" className="text-center w-75 fs-3 mb-3" value={inputValue} onChange={handleInputChange} />
            <div>{showTurkish && turkish}</div>{" "}
            <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <button className="btn btn-success btn-sm">Check</button>
              <button className="btn btn-danger btn-sm" onClick={() => setShowTurkish(true)}>
                Reveal
              </button>
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-large fs-5" onClick={() => handleGenerateWord()}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default PresentCont;
