"use client";

import { CategoryDistributionChart } from "@/modules/dashboard/components/charts/category-distribution";
import { AveragePriceByCategoryChart } from "@/modules/dashboard/components/charts/price-by-category";
import { RatingDistributionChart } from "@/modules/dashboard/components/charts/rating-distribution";
import { useProducts } from "@/modules/dashboard/hooks/useProducts";
import { Loader } from "@/modules/shared/components/ui/loader";

export default function Page() {
  const { products, isLoading } = useProducts();


  return (
    <div className="mt-16">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="min-h-[440px] mb-6 p-5 bg-white rounded-lg shadow">
            <h5 className="mb-5 text-center">
              Distribución de productos por categoría
            </h5>
            <CategoryDistributionChart data={products} />
          </div>
          <div className="min-h-96 mb-6 p-5 bg-white rounded-lg shadow">
            <h5 className="mb-5 text-center">
              Precio promedio por categoría
            </h5>
            <AveragePriceByCategoryChart data={products} />
          </div>

          <div className="min-h-96 mb-6 p-5 bg-white rounded-lg shadow">
            <h5 className="mb-5 text-center">
              Distribución de productos por rating
            </h5>
            <RatingDistributionChart data={products} />
          </div>
        </div>
      )}
    </div>
  );
}
