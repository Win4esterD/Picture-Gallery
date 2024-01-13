export default function ProductDetails({params} : { params: {
  productId: string,
} }){
  return <h1>Details of the product {params.productId}</h1>;
}