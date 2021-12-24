import { Container, Button } from "../style";

const Main = ({ items, setCurrentItem }) => {
  const handleClick = (item) => {
    setCurrentItem(item);
  };

  return (
    <Container>
      {items &&
        Object.keys(items.message).map((item) => (
          <Button key={item} onClick={() => handleClick(item)}>
            {item}
          </Button>
        ))}
    </Container>
  );
};

export default Main;
