import { CandleData } from "../components/charts";

export const CandleStickDataTransform = (data: CandleData[]) => {
  return {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,
    exportEnabled: true,
    data: [
      {
        type: "candlestick",
        dataPoints: data.map((item: any) => {
          return {
            x: new Date(item.x), // Convert string to Date object
            y: [item.open, item.close, item.low, item.high], // Create the y array with open, high, low, close
          };
        }),
      },
    ],
  };
};
