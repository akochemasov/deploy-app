import { useSearchParams } from "react-router-dom";

export const Welcome = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <h1>Welcome PAGE</h1>
      <h3>id: {id}</h3>
    </>
  );
};
