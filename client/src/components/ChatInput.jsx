import React from "react";

const ChatInput = () => {
  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-l px-4 py-4 overflow-auto relative">
      <textarea rows={1} className="border-0 bg-transparent outline-none w-11/12" />
      <img
        src="./send.png"
        width={20}
        className="absolute top-4 right-3 hover:cursor-pointer easy-in duration-100 hover:scale-125"
        alt="Send-btn"
      />
    </div>
  );
};

export default ChatInput;
