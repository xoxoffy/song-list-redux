import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { selectSong } from "../actions/ActionCreators";

const SongList = ({ songs, selectSong }) => {
  const renderList = () => {
    return songs.map((song) => {
      return (
        <div key={song.title}>
          <div>Title: {song.title}</div>
          <div>
            <Button
              onClick={() => selectSong(song)}
              variant="outlined"
              color="secondary"
            >
              Select
            </Button>
          </div>
          <hr />
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
