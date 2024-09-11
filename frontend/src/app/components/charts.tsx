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

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = (data: CandleData[]) => {
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

interface LineChartData {
  labels: string[];
  data: number[];
}

interface BarChartData extends LineChartData {}

interface PieChartData extends LineChartData {}
interface CandleData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export function CandleStickChartComponent({ data }: { data: CandleData[] }) {
  const newData = options(data);
  return (
    <div className="chart bg-white lg:m-0 md:m-5 m-10">
      <h2 className="text-center font-semibold">Scatter Chart</h2>
      <CanvasJSChart options={newData} />
    </div>
  );
}

export function LineChartComponent({ data }: { data: LineChartData }) {
  return (
    <div className="chart bg-white lg:m-0 md:m-5 m-10">
      <h2 className="text-center font-semibold">Line Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
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
    <div className="chart bg-white lg:m-0 md:m-5 m-10">
      <h2 className="text-center font-semibold">Bar Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
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
    <div className="chart bg-white lg:m-0 md:m-5 m-10">
      <h2 className="text-center font-semibold">Pie Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
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
