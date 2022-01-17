import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Typography, Avatar, Tag, Tooltip } from "neetoui/v2";

function Footer({ action, tag, time, img }) {
  return (
    <div className="flex justify-between py-3 items-center">
      <Tag color="grey" className="text-gray-600 bg-gray-100" label={tag} />
      <div className="flex items-center space-x-2">
        <Clock size="12" />
        <Tooltip content="Wednesday, 10.30AM" position="bottom-start">
          <Typography className="text-gray-600" style="body3">
            {action} {time}
          </Typography>
        </Tooltip>

        <Avatar user={{ imageUrl: img }} size="small" />
      </div>
    </div>
  );
}

export default Footer;
