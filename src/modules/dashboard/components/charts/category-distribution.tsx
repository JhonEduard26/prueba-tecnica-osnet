import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export const CategoryDistributionChart = ({ data }: Props) => {
  const getCategoryDistribution = () => {
    const categoryCount = data.reduce(
      (acc: { [key: string]: number }, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
      },
      {}
    );

    return {
      series: Object.values(categoryCount),
      labels: Object.keys(categoryCount),
    };
  };

  const donutOptions = {
    chart: {
      type: "donut" as const,
    },
    labels: getCategoryDistribution().labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <Chart
      options={donutOptions}
      series={getCategoryDistribution().series}
      type="donut"
      height={350}
    />
  );
};
