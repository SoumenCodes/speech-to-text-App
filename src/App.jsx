import { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const [copied, setCopied] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function copyfunction() {
    navigator.clipboard
      .writeText(transcript)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  }
  function show() {
    console.log(copytext, "show fun");
  }

  return (
    <div className="border-black border-2  w-[90vw]  md:w-[65vw] mx-auto mt-20 bg-indigo-700 rounded-xl">
      <div className="text-center text-2xl md:text-5xl m-4 font-semibold text-white">
        Speech To Text Converter
      </div>
      <div className=" rounded-md  mx-auto">
        <div className="h-[50vh] rounded-md object-cover mx-7 p-4 text-white overflow-hidden text-lg bg-indigo-600">
          <div>
            {listening ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            )}
          </div>
          {transcript}
        </div>
        {copied && (
          <div className="text-center text-white">
            Text copied to clipboard!
          </div>
        )}

        <div className="p-4 flex gap-4 justify-around">
          <button
            type="button"
            className="mt-4 rounded-md bg-black px-2 md:px-6 py-1 md:text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={copyfunction}
          >
            Copy text
          </button>
          <button
            type="button"
            className="flex items-center mt-4 rounded-md bg-black px-2 md:px-6 py-1 md:text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={startListening}
          >
            Start Listening
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          </button>
          <button
            type="button"
            className="flex items-center mt-4 rounded-md bg-black px-2 md:px-6 py-1 md:text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={SpeechRecognition.stopListening}
          >
            Stop Listening
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-1"
            >
              <path
                // stroke-linecap="round"
                // stroke-linejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
