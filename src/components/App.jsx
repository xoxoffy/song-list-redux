import SongList from "./SongList";
import { Container } from "@material-ui/core";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <Container maxWidth="md">
      <SongList />
      <SongDetail />
    </Container>
  );
};

export default App;
