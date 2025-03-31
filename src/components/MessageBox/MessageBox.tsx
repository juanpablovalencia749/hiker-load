import React from "react";

interface MessageBoxProps {
  message: string;
  color: string;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ message, color }) => {
  const formatMessage = (message: string) => {
    const boldText = message.replace(
      /\*\*([^*]+)\*\*/g,
      (_, p1) => `<strong>${p1}</strong>`
    );
    const italicText = boldText.replace(
      /\*([^*]+)\*/g,
      (_, p1) => `<em>${p1}</em>`
    );
    return italicText
      .split("\n")
      .map((line, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
      ));
  };
  return (
    <div className="message-box" style={{ color }}>
      {formatMessage(message)}
    </div>
  );
};
