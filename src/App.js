import { useEffect, useState } from "react";
import Main from "./pages/Main/main";
import useFetch from "./api/useFetch";
import Spinner from "./pages/Spinner/spinner";
import Modal from "./pages/Modal/modal";
import { MainTitleContainer, MainTitle } from "./pages/style";
function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [open, setOpen] = useState(false);
  const { data, isLoading, errorMessage } = useFetch(
    "https://dog.ceo/api/breeds/list/all"
  );

  useEffect(() => {
    currentItem && setOpen(true);
  }, [currentItem]);

  const handleClose = () => {
    setOpen(false);
    setCurrentItem("");
  };

  if (errorMessage) return <>{errorMessage}</>;
  if (isLoading) return <Spinner />;

  return (
    <>
    <MainTitleContainer><MainTitle>Dog App</MainTitle></MainTitleContainer>
      <Main items={data} setCurrentItem={setCurrentItem} />
      {open && <Modal currentItem={currentItem} handleClose={handleClose} />}
    </>
  );
}

export default App;
