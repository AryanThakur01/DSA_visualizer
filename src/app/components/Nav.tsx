import Link from "next/link";

type Props = {};

export default function Nav({}: Props) {
  return (
    <div className="container h-10 flex items-center">
      <Link href="/" className="font-bold">
        dsa/visualizer
      </Link>
    </div>
  );
}
