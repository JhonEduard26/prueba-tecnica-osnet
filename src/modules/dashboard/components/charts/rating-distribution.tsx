import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export const RatingDistributionChart = ({ data }: Props) => {
  const getRatingDistribution = () => {
    const ratingGroups = data.reduce(
      (acc: { [key: string]: number }, product) => {
        const rating = Math.floor(product.rating.rate);
        acc[rating] = (acc[rating] || 0) + 1;
        return acc;
      },
      {}
    );

    return {
      series: [
        {
          name: "Productos",
          data: Object.values(ratingGroups),
        },
      ],
      categories: Object.keys(ratingGroups).map(
        (rating) => `${rating} estrellas`
      ),
    };
  };

  const ratingOptions = {
    chart: {
      type: "bar" as const,
    },
    xaxis: {
      categories: getRatingDistribution().categories,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  };

  return (
    <Chart
      options={ratingOptions}
      series={getRatingDistribution().series}
      type="bar"
      height={350}
    />
  );
};
