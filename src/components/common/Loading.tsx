import { TrophySpin } from "react-loading-indicators";

export default function Loading() {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <TrophySpin
        color="#449444"
        size="large"
        text="Hypernative"
        textColor="#2a216c"
      />
    </div>
  );
}
