import { useState } from 'react';
import ClipboardButton from 'react-clipboard.js';
import ClipboardIcon from '../Icons/ClipboardIcon';
import CopiedIcon from '../Icons/CopiedIcon';

const ClipboardBtn = ({ value }) => {
  const [copied, setCopied] = useState(false);

  return (
    <ClipboardButton
      data-clipboard-text={value}
      button-title="Copy to clipboard"
      className="btn btn-sm btn-ghost flex absolute right-2"
      onClick={(e) => setCopied(true)}
    >
      {copied ? <CopiedIcon setCopied={setCopied} /> : <ClipboardIcon />}
    </ClipboardButton>
  );
};

export default ClipboardBtn;
