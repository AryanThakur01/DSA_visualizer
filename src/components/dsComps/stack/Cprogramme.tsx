import { FC } from "react";
import Code from "./c-code.mdx";

interface ICprogramme {}

const Cprogramme: FC<ICprogramme> = () => {
  const code = Code;
  return (
    <div className="border border-border rounded-md px-2 background-card shadow-sm bg-muted">
      <pre className="max-h-[80vh] max-w-full overflow-scroll">
        {/* {code} */}
      </pre>
    </div>
  );
};

export default Cprogramme;
