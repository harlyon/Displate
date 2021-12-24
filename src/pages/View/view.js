import React from "react";
import useFetch from "../../api/useFetch";
import Spinner from "../Spinner/spinner";
import { Button, Image } from "../style";

const View = ({ name }) => {
  const dogName = name.split("-").join("/");
  const { data, isLoading, errorMessage, refetch } = useFetch(
    `https://dog.ceo/api/breed/${dogName}/images/random`
  );
  const dogImage = data && data.message;

  const allImage = () => {
    refetch();
  };

  if (errorMessage) return <>{errorMessage}</>;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Image src={dogImage} alt="dog" />
      <Button onClick={allImage}>More Images</Button>
    </>
  );
};

export default View;
