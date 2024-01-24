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
  const [word, setWord] = useState<EnTurkPark | null>(null);
  const [pronouns, setPronouns] = useState<EnTurkPark | null>(null);

  const handleGenerateWord = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomPronoun = pronounPairs[Math.floor(Math.random() * pronounPairs.length)];
    setWord(randomVerb);
    setPronouns(randomPronoun);
    console.log(randomVerb);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.pageCard} d-flex flex-column justify-content-center align-items-center w-75`}>
        <h1>Present Continuous Practice</h1>
        <div className="d-flex flex-row justify-content-around align-items-center">
          <div className="fs-1 d-flex flex-column justify-content-center align-items-center m-5">
            <div>İngilizce:</div>
            <div>{word && presentContinuousSentence(word.english, pronouns!.english)}</div>{" "}
          </div>
          <div className="fs-1 d-flex flex-column justify-content-center align-items-center m-5">
            <div>Türçke:</div>
            <div>{word && word.turkish}</div>{" "}
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
