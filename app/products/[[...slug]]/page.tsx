import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortedName: string[] };
}
const ProductPage = ({
  params: { slug },
  searchParams: { sortedName },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortedName}
    </div>
  );
};

export default ProductPage;
