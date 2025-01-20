import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export const AveragePriceByCategoryChart = ({ data }: Props) => {
  const getAveragePricesByCategory = () => {
    const categoryPrices = data.reduce(
      (acc: { [key: string]: number[] }, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product.price);
        return acc;
      },
      {}
    );

    const categories = Object.keys(categoryPrices);
    const averagePrices = categories.map((category) => {
      const prices = categoryPrices[category];
      return Number(
        (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2)
      );
    });

    return {
      categories,
      series: [
        {
          name: "Precio Promedio",
          data: averagePrices,
        },
      ],
    };
  };

  const barOptions = {
    chart: {
      type: "bar" as const,
    },
    xaxis: {
      categories: getAveragePricesByCategory().categories,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  };

  return (
    <Chart
      options={barOptions}
      series={getAveragePricesByCategory().series}
      type="bar"
      height={350}
    />
  );
};
