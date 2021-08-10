import React from "react";

export default function Form(props) {
  return (
    <div className="pl-2.5">
      <h1 className="text-left text-gray-700 text-xl font-bold pt-5  font-sans">
        MY TASKS LIST
      </h1>
      <div className="flex flex-row ">
        <input
          id="text_field"
          className="w-80 pl-2.5"
          type="text"
          placeholder="New Task"
        />
        <button
          className="bg-blue-500 plusbtn ml-1 w-10 text-white font-bold"
          id="+"
          onClick={props.add}
        >
          +
        </button>
      </div>
      <div className="pt-2 flex">
        <button
          id="del_all"
          className="bg-red-500 text-white w-24 focus:ring-2 focus:ringColor-black focus:ring-gray-900"
          onClick={props.delAll}
        >
          Delete All
        </button>

        {console.log(props.delAll)}
        <button
          id="delete_Completed"
          className="bg-red-500 text-white w-36 ml-2 focus:ring-2 focus:ringColor-black focus:ring-gray-900"
        >
          Delete Completed
        </button>
      </div>
    </div>
  );
}
