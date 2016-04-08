import React from "react";

import "normalize.css/normalize.css";
import styles from "./App.css";

import SimpleFormContainer from "./SimpleForm";

const questions = [
  {
    title: "Hi, what's your name?",
    id: "name",
    type: "text",
  },
  {
    title: "<%= name %>, what degree are you interested in?",
    type: "select",
    id: "degree",
    description: "Degrees range in completion time. Consider which one best fits your career goals and academic interests",
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
  {
    title: "How old are you, <%= name %>?",
    description: "Certain schools enforce age limits. We're just making sure to show you the best results.",
    id: "age",
    type: "number",
  },
  {
    id: "educationLevel",
    title: "What's your education history like?",
    description: "We just want to make sure to show you programs that best fit your needs.",
    type: "select",
    choices: [
      {
        value: "1",
        text: "Still in High School",
      },
      {
        value: "2",
        text: "High School",
      },
      {
        value: "3",
        text: "Some College",
      },
      {
        value: "4",
        text: "Associate's Degree",
      },
      {
        value: "5",
        text: "Bachelor's Degree",
      },
      {
        value: "6",
        text: "Masters Degree",
      },
      {
        value: "7",
        text: "Doctorate",
      },
      {
        value: "10",
        text: "GED",
      },
      {
        value: "12",
        text: "None of the above",
      },
    ],
  },
  {
    id: "zipCode",
    title: "What's your zip code?",
    description: "Certain schools enforce geographic restrictions. This just helps us narrow your results down even more.",
    type: "number",
  }

]

const App = () => (
  <main className={styles.app}>
    <SimpleFormContainer questions={questions} />
  </main>
);

export default App;
