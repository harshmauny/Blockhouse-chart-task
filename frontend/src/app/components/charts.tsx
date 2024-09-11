import {
  LineChart,
  BarChart,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
  Pie,
  CartesianGrid,
} from "recharts";
import CanvasJSReact from "@canvasjs/react-charts";
import { CandleStickDataTransform } from "../util/chartsDataUtil";

export interface LineChartData {
  labels: string[];
  data: number[];
}

export interface CandleData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface BarChartData extends LineChartData {}

interface PieChartData extends LineChartData {}

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const CandleStickChartComponent = ({ data }: { data: CandleData[] }) => {
  const newData = CandleStickDataTransform(data);
  return (
    <div className="chart bg-white  md:m-5 m-12">
      <h2 className="text-center font-semibold">Scatter Chart</h2>
      <CanvasJSChart options={newData} />
    </div>
  );
};

export function LineChartComponent({ data }: { data: LineChartData }) {
  return (
    <div className="chart bg-white  md:m-5 m-12">
      <h2 className="text-center font-semibold">Line Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data.labels.map((label, index) => ({
            name: label,
            value: data.data[index],
          }))}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#111827" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BarChartComponent({ data }: { data: BarChartData }) {
  return (
    <div className="chart bg-white  md:m-5 m-12">
      <h2 className="text-center font-semibold">Bar Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data.labels.map((label, index) => ({
            name: label,
            value: data.data[index],
          }))}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#111827" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PieChartComponent({ data }: { data: PieChartData }) {
  return (
    <div className="chart bg-white  md:m-5 m-10">
      <h2 className="text-center font-semibold">Pie Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data.labels.map((label, index) => ({
              name: label,
              value: data.data[index],
            }))}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#111827"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
