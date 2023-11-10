import { useState } from "react";

const Example = () => {
  const [ischacked, setIsChecked] = useState(true);

  
  const toggleChecked = () => {
    setIsChecked (prevState => !prevState);
  }

  return (
    <>
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>
    <div>
      <label htmlFor="my-check">
        체크버튼: 
      </label>
      <input
      type="checkbox"
      id="my-check"
      checked={ischacked}
      onChange={() => toggleChecked(prevState => !prevState)}
      />
      <div>{ischacked ? "ON!" : "OFF"}</div>

    </div>



    </>
  );
};

export default Example;
