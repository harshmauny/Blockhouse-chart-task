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
import { Spinner } from "@material-tailwind/react";

export default function Dashboard() {
  const [chartData, setChartData] = useState({
    candlestick: [],
    line: { labels: [], data: [] },
    bar: { labels: [], data: [] },
    pie: { labels: [], data: [] },
  });
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner
          className="h-12 w-12"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </div>
    );
  }

  return (
    <div className="dashboard">
      {fetchError ? (
        <div className="h-screen flex justify-center items-center">
          <div className="font-semibold text-xl ">Not Found</div>
        </div>
      ) : (
        <>
          <Header />
          <div className="max-w-[1200px]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <CandleStickChartComponent data={chartData.candlestick} />
            <LineChartComponent data={chartData.line} />
            <BarChartComponent data={chartData.bar} />
            <PieChartComponent data={chartData.pie} />
          </div>
        </>
      )}
    </div>
  );
}
