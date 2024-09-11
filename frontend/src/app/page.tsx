"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChartComponent,
  BarChartComponent,
  PieChartComponent,
  CandleStickChartComponent,
} from "./components/charts";
import Header from "./components/header";

export default function Dashboard() {
  const [chartData, setChartData] = useState({
    candlestick: [],
    line: { labels: [], data: [] },
    bar: { labels: [], data: [] },
    pie: { labels: [], data: [] },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candlestick, line, bar, pie] = await Promise.all([
          axios.get("http://localhost:8000/api/candlestick-data/"),
          axios.get("http://localhost:8000/api/line-chart-data/"),
          axios.get("http://localhost:8000/api/bar-chart-data/"),
          axios.get("http://localhost:8000/api/pie-chart-data/"),
        ]);

        setChartData({
          candlestick: candlestick.data.data,
          line: line.data,
          bar: bar.data,
          pie: pie.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <Header />
      <div className="max-w-[1200px]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <CandleStickChartComponent data={chartData.candlestick} />
        <LineChartComponent data={chartData.line} />
        <BarChartComponent data={chartData.bar} />
        <PieChartComponent data={chartData.pie} />
      </div>
    </div>
  );
}
