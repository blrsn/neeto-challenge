import React from "react";

import Body from "./Body";
import Footer from "./Footer";

const Card = ({ note }) => {
  const { title, description, action, tag, time, img } = note;
  return (
    <div className="border divide-y neeto-ui-shadow-xs px-3">
      <Body title={title} description={description} />
      <Footer action={action} tag={tag} time={time} img={img} />
    </div>
  );
};

export default Card;
