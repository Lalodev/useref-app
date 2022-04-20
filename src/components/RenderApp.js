import { useEffect, useRef, useState } from "react";

const RenderApp = () => {
  const [text, setText] = useState("");
  // render1 ref=1
  // render2 ref=2
  const rendersRef = useRef(1);

  //const [renders, setRenders] = useState(0);
  //setRenders(renders + 1);
  /*useEffect(() => {
    setRenders(renders + 1);
  });*/

  // render1 ref=1
  // render2 ref=2
  useEffect(() => {
    /*const renders = rendersRef.current;
    rendersRef.current = rendersRef.current + 1;*/
    rendersRef.current++;
    // render1 ref++ = 2
    // render2 ref++ = 3
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* render1 ref=1*/}
      {/* render2 ref=2*/}
      <h2>Renders: {rendersRef.current}</h2>
    </div>
  );
};

export default RenderApp;
