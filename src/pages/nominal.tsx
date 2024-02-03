import { useEffect, useState } from "react";
import Link from "next/link";
import { nominalAdjectiveMaster, nominalNounMaster } from "@/utils/nominal";
import { adjectives } from "@/data/vocab/adjectives";
import { animals } from "@/data/vocab/animals";
import { nominalNouns } from "@/data/vocab/nominalNoun";
import { pronounPairs } from "@/data/vocab/pronounPairs";
import { FaGear } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import Layout from "@/components/layout/Layout";
import Settings from "@/components/settings/Settings";
import styles from "./presentCont.module.css";

interface EngTurkTuple {
  english: string;
  turkish: string;
}

const PresentCont = () => {
  const [english, setEnglish] = useState<string>("");
  const [turkish, setTurkish] = useState<string>("");
  const [showMain, setShowMain] = useState<boolean>(false);
  const [showTurkish, setShowTurkish] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [correct, setCorrect] = useState<boolean>(false);
  const [incorrect, setIncorrect] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moodList, setMoodList] = useState<string[] | null>(null);
  const [animalMode, setAnimalMode] = useState<boolean>(false);

  const generateAdjectivalNominal = (randomPronoun: EngTurkTuple, randomAdjective: EngTurkTuple) => {
    if (moodList) {
      const randomMood = moodList[Math.floor(Math.random() * moodList.length)];
      const { english, turkish } = nominalAdjectiveMaster(randomAdjective, randomPronoun, randomMood);
      setEnglish(english!);
      setTurkish(`${randomPronoun.turkish} ${turkish}`);
    } else {
      const { english, turkish } = nominalAdjectiveMaster(randomAdjective, randomPronoun);
      setEnglish(english!);
      setTurkish(`${randomPronoun.turkish} ${turkish}`);
    }
  };

  const generateNounNominal = (randomPronoun: EngTurkTuple, randomNoun: EngTurkTuple) => {
    if (moodList) {
      const randomMood = moodList[Math.floor(Math.random() * moodList.length)];
      const { english, turkish } = nominalNounMaster(randomNoun, randomPronoun, randomMood);
      setEnglish(english!);
      setTurkish(`${randomPronoun.turkish} ${turkish}`);
    } else {
      const { english, turkish } = nominalNounMaster(randomNoun, randomPronoun);
      setEnglish(english!);
      setTurkish(`${randomPronoun.turkish} ${turkish}`);
    }
  };

  const displayPrompt = () => {
    let randomPronoun = pronounPairs[Math.floor(Math.random() * pronounPairs.length)];
    if (randomPronoun.english === "s/he/it") {
      const random = Math.floor(Math.random() * 3);
      switch (random) {
        case 0:
          randomPronoun = { english: "he", turkish: "o" };
          break;
        case 1:
          randomPronoun = { english: "she", turkish: "o" };
          break;
        case 2:
          randomPronoun = { english: "it", turkish: "o" };
          break;
      }
    }
    const random = Math.random();
    if (random > 0.25) {
      const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      generateAdjectivalNominal(randomPronoun, randomAdjective);
    } else {
      const randomNoun = nominalNouns[Math.floor(Math.random() * nominalNouns.length)];
      generateNounNominal(randomPronoun, randomNoun);
    }
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

  const isEquivalent = (inputValue: string, turkish: string) => {
    let cleanedInput = inputValue
      .toLowerCase()
      .replace(/[^a-z]+/g, "")
      .trim();

    let cleanedTurkishMinusPronoun = turkish
      .split(" ")
      .slice(1)
      .join(" ")
      .toLowerCase()
      .replace(/[^a-z]+/g, "")
      .trim();

    let cleanedTurkish = turkish
      .toLowerCase()
      .replace(/[^a-z]+/g, "")
      .trim();

    return cleanedInput === cleanedTurkish || cleanedInput === cleanedTurkishMinusPronoun;
  };

  const handleCheckAnswer = () => {
    if (!inputValue) {
      return;
    }
    if (inputValue.startsWith("İ")) {
      setInputValue((prev) => prev.replace("İ", "i"));
    }
    if (isEquivalent(inputValue, turkish)) {
      setCorrect(true);
      setIncorrect(false);
      setShowTurkish(true);
    } else {
      setCorrect(false);
      setIncorrect(true);
    }
  };

  console.log(inputValue, turkish);

  return (
    <Layout>
      <Link href="/">
        <button className="top-left btn btn-sm btn-dark text-light">
          <IoChevronBack />
        </button>
      </Link>

      <h1 className="text-center">İSİM CÜMLELERİ</h1>
      <hr />
      {showMain && (
        <div className="d-flex flex-column  justify-content-between">
          <div className="fs-1 d-flex flex-column justify-content-center align-items-center text-center mb-3">
            <div className="fw-bold">İngilizce:</div>
            <div>{english && english}</div>{" "}
          </div>
          <div className="fs-1 d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <div className="fw-bold">Türkçe:</div>
            <div className="d-flex flex-row justify-content-center align-items-center mb-3">
              {!showTurkish && (
                <>
                  <input
                    type="text"
                    className="text-center w-100 fs-3"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={incorrect ? { border: "4px dashed red" } : {}}
                  />
                </>
              )}
            </div>
            <div className={`${correct && "text-success fw-bold"} ${incorrect && "text-danger fw-bold"}`}>
              {showTurkish && turkish}
            </div>{" "}
            {!showTurkish && (
              <div className={` d-flex flex-row justify-content-center align-items-center w-100`}>
                <button className="btn btn-success btn-sm" onClick={() => handleCheckAnswer()}>
                  Check
                </button>
                <div className={styles.filler}></div>
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
