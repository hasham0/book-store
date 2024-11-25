import { useParams } from "react-router-dom";

type Props = {};

export default function DynamicBook({}: Props) {
  const params = useParams<{ id: string }>();
  console.log("🚀 ~ DynamicBook ~ params:", params);

  return <div>Dynamic-book</div>;
}
