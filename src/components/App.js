import "normalize.css/normalize.css";
import styles from "./App.css";
import React from "react"

import SimpleForm from "./SimpleForm";

const questions = [
  {
    description: "How old are you?",
    type: "text",
    helperText: "We use your age to narrow down the results you see, so you only see what you need to."
  },
  {
    description: "What's your name?",
    type: "text",
    //helperText: "We ."
  }
]

const App = React => () => {
  return (
    <main className={styles.app}>
      <SimpleForm questions={questions} />
    </main>
  );
}

export default App;
