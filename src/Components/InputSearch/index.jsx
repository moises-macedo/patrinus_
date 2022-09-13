import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { InputOpenSearch, Div } from "./styled";

export const InputSearch = ({ placeholder }) => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      {openSearch ? (
        <InputOpenSearch>
          <input type="text" placeholder={placeholder} />
          <FiSearch onClick={() => setOpenSearch(false)} />
        </InputOpenSearch>
      ) : (
        <Div>
          <FiSearch onClick={() => setOpenSearch(true)} />
        </Div>
      )}
    </>
  );
};