import React from "react";

const ChatBody = () => {
  const aiStyle = "bg-white bg-opacity-40 background-blur-lg dropshadow-md mr-auto";

  return (
    <div className="flex flex-col gap-4">
      {/* Client Message */}
      <div
        className="border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]"
      >
        <pre className="whitespaces-pre-wrap">
          <span>Salut Chat GPT, Tu peux m'aider ? </span>
        </pre>
      </div>

      {/* AI Message */}
      <div
        className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]>
        <pre className="whitespaces-pre-wrap ${aiStyle}
        `}>
        <pre>
          <span>Salut utilisateur, En quoi puis-je t'aider ? </span>
        </pre>
      </div>
    </div>
  );
};

export default ChatBody;
