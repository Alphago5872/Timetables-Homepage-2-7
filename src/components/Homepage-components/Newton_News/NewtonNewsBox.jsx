import react from "react";
import NewtonNewsCard from "./NewtonNewsCard";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export default function NewsBox() {
  return (
    <div>
        <div className="news">
          <NewtonNewsCard title="I KILLED UR DAD :)))))" description="sfjiadspfjlasfuka" />
          <NewtonNewsCard title="I KILLED UR DAD :)))))" description="sfjiadspfjlasfuka" />
          <NewtonNewsCard title="I KILLED UR DAD :)))))" description="sfjiadspfjlasfuka" />
        </div>
    </div>
  );
}
