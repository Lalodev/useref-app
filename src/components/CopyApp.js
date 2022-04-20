import { useState, useRef } from "react";

const CopyApp = () => {
  const [text, setText] = useState("Hola!");
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    //console.log(input);
    input.select();
    document.execCommand("copy");

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      {isCopied && <h4>Copied</h4>}
    </div>
  );
};

export default CopyApp;
