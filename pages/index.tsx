import React, { useState } from "react";
import ChooseOption from "../src/components/ChooseOption";

function Index() {
  const [openOption, setOpenOption] = useState(true);

  const isNew =
    typeof window !== "undefined" && localStorage.getItem("isNew") !== "false";

  return (
    <div className="bg-primary-blue-gradient h-screen">
      {openOption && isNew ? (
        <ChooseOption setOpenOption={setOpenOption} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;
