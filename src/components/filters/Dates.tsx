import React from "react";

interface IProps {
  setBeginDateFilter: (e: string) => void;
  setEndDateFilter: (e: string) => void;
  beginDateFilter: string;
  endDateFilter: string;
}

function InputDate({
  setBeginDateFilter,
  beginDateFilter,
  setEndDateFilter,
  endDateFilter,
}: IProps) {
  return (
    <div className="flex justify-between -ml-3">
      <form>
        <input
          name="date"
          id="dateInput"
          type="date"
          value={beginDateFilter}
          onChange={(e) => setBeginDateFilter(e.target.value)}
          className="w-[90%] text-center font-semibold rounded-full px-3 py-2 text-lg"
        />
      </form>
      <p className="font-semibold flex items-center text-custom-white text-lg">
        to
      </p>
      <form>
        <input
          name="date"
          id="dateInput"
          type="date"
          value={endDateFilter}
          onChange={(e) => setEndDateFilter(e.target.value)}
          className="w-[90%] text-center font-semibold rounded-full px-3 py-2 text-lg"
        />
      </form>
    </div>
  );
}

export default InputDate;
