import React, { useContext } from "react";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

function History() {
  const { userData } = useContext(userDataContext);
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen p-6 bg-[#0e0e2c] flex flex-col relative">
      {/* Back Arrow */}
      <MdKeyboardBackspace
        className="absolute top-6 left-6 text-white w-[30px] h-[30px] cursor-pointer hover:text-blue-400 transition duration-200"
        onClick={() => navigate("/")}
      />

      {/* Header */}
      <h1 className="text-white font-bold text-[24px] text-center mb-6 tracking-wide">
        Your Assistant History
      </h1>

      {/* Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4" />

      {/* Scrollable History Section */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
        {userData?.history?.length > 0 ? (
          userData.history.map((his, index) => (
            <div
              key={index}
              className="bg-[#1f1f3f] hover:bg-[#2a2a50] text-white text-[16px] px-4 py-3 rounded-md transition duration-200 shadow-md"
            >
              {his}
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-[16px]">
            No history yet. Start talking to your assistant!
          </p>
        )}
      </div>
    </div>
  );
}

export default History;
