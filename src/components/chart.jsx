import React from "react";

const Chart = () => {
  return (
    <div>
      <div class="shadow-lg rounded-lg overflow-hidden">
        <div class="py-3 px-5 bg-gray-50">Line chart</div>
        <canvas class="p-10" id="chartLine"></canvas>
      </div>
    </div>
  );
};

export default Chart;
