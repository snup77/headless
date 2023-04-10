import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const id = product.node.id;
  const handle = product.node.handle;
  const title = product.node.title;
  const imageNode = product.node.images.edges[0].node;
  const price = product.node.priceRange.maxVariantPrice.amount.replace(
    /\.0/g,
    ""
  );

  return (
    <div
      className="
    w-full
    md:w-1/2
    lg:w-1/3
    p-2
  "
    >
      <Link href={`/${handle}`}>
        <a aria-label="Mod Leather Sofa">
          <Image
            alt="couch6"
            src={imageNode.url}
            width={imageNode.width}
            height={imageNode.height}
            layout="responsive"
          />
        </a>
      </Link>
      <div>
        <p className="m-4 text-center text-l font-semibold mb-1">{title}</p>
        <p className="text-center text-gray-700 mb-4">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
