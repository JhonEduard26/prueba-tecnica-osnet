"use client";

interface Props {
  id: number;
}

export const DeleteButton = ({ id }: Props) => {
  const onClick = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const response = await data.json();
    console.log("🚀 ~ fetchDeleteProduct ~ response:", response);
  };

  return (
    <button
      className="font-medium text-red-600 hover:underline"
      onClick={() => onClick()}
    >
      Eliminar
    </button>
  );
};
