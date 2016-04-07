import React from "react";

import "normalize.css/normalize.css";
import styles from "./App.css";

import SimpleFormContainer from "./SimpleForm";

const questions = [
  {
    description: "Hi, what's your name?",
    id: "age",
    type: "text",
  },
  {
    description: "What degree are you interested in?",
    type: "select",
    id: "degree",
    helperText: "Degrees range in completion time. Consider which one best fits your career goals and academic interests",
    choices: [
      {
        text: "Associate's",
        value: 1,
      },
      {
        text: "Bachelor's",
        value: 2,
      },
      {
        text: "Master's",
        value: 3,
      },
      {
        text: "Doctorate",
        value: 4,
      },
      {
        text: "Certificate / Diploma",
        value: 5,
      },
      {
        text: "Graduate Certificates",
        value: 6,
      },
    ]
  },
]

const App = () => (
  <main className={styles.app}>
    <SimpleFormContainer questions={questions} />
  </main>
);

export default App;
