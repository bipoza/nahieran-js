import React from "react";
import "./CodeCopyBtn.css";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Tooltip } from "@mui/material";

export default function CodeCopyBtn({ children }) {
  const [copyOk, setCopyOk] = React.useState(false);

  const iconColor = copyOk ? "#4caf50" : "#1B2430";

  const handleClick = (e) => {
    navigator.clipboard.writeText(children[0].props.children[0]);
    console.log(children);

    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <div className="code-copy-btn">
      <Tooltip title={copyOk ? "Copied!" : "Copy to clipboard"}>
        <ContentCopyOutlinedIcon
          onClick={handleClick}
          style={{ color: iconColor }}
        />
      </Tooltip>
    </div>
  );
}
