import React from "react";
import Gif from "./Gif";
import { connect } from "react-redux";

const Gifs = ({ gifData }) => {
  return (
    <div className="gifs">
      {gifData.map((item) => {
        return <Gif key={item.id} item={item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gifData: state.gifData,
  };
};
export default connect(mapStateToProps, {})(Gifs);
