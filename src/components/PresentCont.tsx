import { useState } from "react";
import {
  presentContinuousSentence,
  conjugateTurkishVerb,
  conjugateTurkishVerbInterrogative,
  conjugateTurkishVerbNegative,
  conjugateTurkishVerbNegativeInterrogative,
  presentContinuousInterrogativeSentence,
  presentContinuousNegativeInterrogativeSentence,
  presentContinuousNegativeSentence,
  sentenceMaster
} from "@/utils/presentContinuous";
import { verbs } from "@/data/vocab/verbs";
import { pronounPairs } from "@/data/vocab/pronounPairs";
import { FaXmark } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import Layout from "@/components/Layout";
import Settings from "@/components/Settings";

const PresentCont = () => {
  const [english, setEnglish] = useState<string>("");
  const [turkish, setTurkish] = useState<string>("");
  const [showMain, setShowMain] = useState<boolean>(false);
  const [showTurkish, setShowTurkish] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [correct, setCorrect] = useState<boolean>(false);
  const [incorrect, setIncorrect] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moodList, setMoodList] = useState<Function[] | null>(null);

  const displayPrompt = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomPronoun = pronounPairs[Math.floor(Math.random() * pronounPairs.length)];
    // if (conjugationFunctions) {
    //   const randomConjugationFunction = conjugationFunctions[Math.floor(Math.random() * conjugationFunctions.length)];
    //   setTurkish(randomConjugationFunction(randomVerb.turkish, randomPronoun.turkish));
    //   if (randomConjugationFunction === conjugateTurkishVerb) {
    //     setEnglish(presentContinuousSentence(randomVerb.english, randomPronoun.english));
    //   }
    //   if (randomConjugationFunction === conjugateTurkishVerbInterrogative) {
    //     setEnglish(presentContinuousInterrogativeSentence(randomVerb.english, randomPronoun.english));
    //   }
    //   if (randomConjugationFunction === conjugateTurkishVerbNegative) {
    //     setEnglish(presentContinuousNegativeSentence(randomVerb.english, randomPronoun.english));
    //   }
    //   if (randomConjugationFunction === conjugateTurkishVerbNegativeInterrogative) {
    //     setEnglish(presentContinuousNegativeInterrogativeSentence(randomVerb.english, randomPronoun.english));
    //   }
    // } else {
      const {english, turkish} = sentenceMaster(randomVerb, randomPronoun)
      setEnglish(english!)
      setTurkish(turkish!)
    // }
  };

  const handleGenerateWord = () => {
    if (!showMain) {
      setShowMain(true);
    }

    displayPrompt();
    setShowTurkish(false);
    setCorrect(false);
    setIncorrect(false);
    setInputValue("");
    console.log(english, turkish);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckAnswer = () => {
    if (!inputValue) {
      return;
    }
    if (inputValue.startsWith("İ")) {
      setInputValue((prev) => prev.replace("İ", "i"));
    }
    if (inputValue.toLowerCase().trim() === turkish.toLowerCase().trim()) {
      setCorrect(true);
      setIncorrect(false);
      setShowTurkish(true);
    } else {
      setCorrect(false);
      setIncorrect(true);
    }
  };

  return (
    <Layout>
      <h1 className="text-center">ŞİMDİKİ ZAMAN</h1>
      <hr />
      {showMain && (
        <div className="d-flex flex-column  justify-content-between">
          <div className="fs-1 d-flex flex-column justify-content-center align-items-center text-center mb-3">
            <div className="fw-bold">İngilizce:</div>
            <div>{english && english}</div>{" "}
          </div>
          <div className="fs-1 d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <div className="fw-bold">Türçke:</div>
            <div className="d-flex flex-row justify-content-center">
              {!showTurkish && (
                <>
                  <input
                    type="text"
                    className="text-center w-75 fs-3 mb-3"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  {incorrect && (
                    <div className="text-danger align-self-start">
                      <FaXmark />
                    </div>
                  )}
                </>
              )}
            </div>
            <div className={`${correct && "text-success fw-bold"} ${incorrect && "text-danger fw-bold"}`}>
              {showTurkish && turkish}
            </div>{" "}
            {!showTurkish && (
              <div className="d-flex flex-row justify-content-between align-items-center w-100">
                <button className="btn btn-success btn-sm" onClick={() => handleCheckAnswer()}>
                  Check
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => setShowTurkish(true)}>
                  Reveal
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <button className="btn btn-primary btn-large fs-5" onClick={() => handleGenerateWord()}>
        {!showMain ? "Start" : "Next"}
      </button>
      <button
        className="btn btn-info text-white btn-large fs-5 align-self-end justify-self-end bottom-right"
        onClick={() => setIsModalOpen(true)}
      >
        <FaGear />
      </button>

      <Settings
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setMoodList={setMoodList}
        moodList={moodList}
      />
    </Layout>
  );
};

export default PresentCont;
