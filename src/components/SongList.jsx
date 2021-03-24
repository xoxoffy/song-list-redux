import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

const SongList = ({ songs }) => {
  const renderList = () => {
    return songs.map((song) => {
      return (
        <div key={song.title}>
          <div className="content">Title: {song.title}</div>
          <div>Duration: {song.duration}</div>
          <div>
            <Button variant="outlined" color="secondary">
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

export default connect(mapStateToProps)(SongList);
