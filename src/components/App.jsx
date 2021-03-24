import { selectSong } from "../actions/ActionCreators";
import SongList from "./SongList";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="md">
      <SongList />
    </Container>
  );
};

export default App;
