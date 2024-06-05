import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Layout from "../layout/Layout";
import Link from "next/link";
import styles from "./Menu.module.css";

interface MenuItems {
  [key: string]: {
    presentCont: string;
    nominal: string;
    possessive: string;
    past: string;
    indefinitePast: string;
    future: string;
    grammar: string;
    welcome: string;
  };
}

const Menu = () => {
  const [showGrammarItems, setShowGrammarItems] = useState(false);
  const [displayLanguage, setDisplayLanguage] = useState<string>("tr");
  const [trChecked, setTrChecked] = useState(true);

  const handleGrammarButton = () => {
    setShowGrammarItems(!showGrammarItems);
  };

  const handleTrCheck = () => {
    setTrChecked(!trChecked);
    if (displayLanguage === "tr") {
      setDisplayLanguage("en");
    } else {
      setDisplayLanguage("tr");
    }
  };

  const handleBack = () => {
    setShowGrammarItems(false);
  };

  const grammarItems: MenuItems = {
    tr: {
      presentCont: "Şimdiki Zaman",
      nominal: "İsim Cümleri",
      possessive: "İyelik Eki",
      past: "Geçmiş Zaman",
      indefinitePast: "Duyulan Geçmiş Zaman",
      future: "Gelecek Zaman",
      grammar: "Dilbilgisi",
      welcome: "Hoş Geldiniz!",
    },
    en: {
      presentCont: "Present Continuous",
      nominal: "Nominal Sentences",
      possessive: "Possessive",
      past: "Past Tense",
      indefinitePast: "Indefinite Past Tense",
      future: "Future Tense",
      grammar: "Grammar",
      welcome: "Welcome!",
    },
  };

  return (
    <Layout>
      <div className={styles.containerMain}>
        <div className={styles.langTog}>
          <div>EN</div>
          <label className={styles.switch}>
            <input checked={trChecked} type="checkbox" onChange={handleTrCheck} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <div>TR</div>
        </div>
        <div className={`d-flex flex-column justify-content-around align-items-center ${styles.menuContainer}`}>
          {showGrammarItems ? (
            <>
              <h1 className="text-center">{grammarItems[displayLanguage].grammar}</h1>
              <div className="mb-3">
                <Link href="/presentCont">
                  <button className="btn btn-lg btn-dark text-light w-100 px-5 fs-1">
                    {grammarItems[displayLanguage].presentCont}
                  </button>
                </Link>
              </div>
              <div className="mb-3">
                <Link href="/nominal">
                  <button className="btn btn-lg btn-dark text-light w-100 px-5 fs-1">
                    {grammarItems[displayLanguage].nominal}
                  </button>
                </Link>
              </div>
              <div className="mb-3">
                {" "}
                <Link href="/possessive">
                  <button className="btn btn-lg btn-dark text-light w-100 px-5 fs-1">
                    {grammarItems[displayLanguage].possessive}
                  </button>
                </Link>
              </div>
              <div className="mb-3">
                {" "}
                <Link href="/past">
                  <button className="btn btn-lg btn-dark text-light w-100 px-5 fs-1">
                    {grammarItems[displayLanguage].past}
                  </button>
                </Link>
              </div>
              <div className="mb-3">
                {" "}
                <Link href="/indefinitePast">
                  <button className="btn btn-lg btn-dark text-light w-100 px-5 fs-1">
                    {grammarItems[displayLanguage].indefinitePast}
                  </button>
                </Link>
              </div>
              <div className="mb-3">
                {" "}
                <Link href="/future">
                  <button className="btn btn-lg btn-dark text-light w-100 px-5 fs-1">
                    {grammarItems[displayLanguage].future}
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center">{grammarItems[displayLanguage].welcome}</h1>
              <div className="mb-3">
                <button onClick={handleGrammarButton} className="btn btn-lg btn-dark text-light w-100 px-5 fs-1">
                  {grammarItems[displayLanguage].grammar}
                </button>
              </div>
              <div className="mb-3">
                {" "}
                <Link href="/flashcard">
                  <button className="btn btn-lg btn-dark text-light w-100 px-5 fs-1">Flashcards</button>
                </Link>
              </div>
            </>
          )}
        </div>
        {showGrammarItems && (
          <div>
            <button className="noStyleButt" onClick={handleBack}>
              <IoMdArrowRoundBack className="fs-1" />
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

//GEÇMİŞ ZAMAN
// GELECEK ZAMAN

export default Menu;
