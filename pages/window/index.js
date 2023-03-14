import { useRouter } from "next/router";
import Link from 'next/link'

export default function SomePage() {
  const router = useRouter();
  const query = router.query;
  const { frameMaterial, glassType, frameColor } = query;

  return (
    <><div style={{ padding: 40 }}>
      <h1>Results</h1>
      <h2>
        Frame material: <span style={{ color: "#7828c8" }}>{frameMaterial}</span>
      </h2>
      <h2>
        Glass type: <span style={{ color: "#7828c8" }}>{glassType}</span>
      </h2>
      <h2>
        Frame color: <span style={{ color: "#7828c8" }}>{frameColor}</span>
      </h2>
    </div><Link className="return-link" href={{
      pathname: "/"
    }}>RETURN TO HOME PAGE</Link></>
  );
}