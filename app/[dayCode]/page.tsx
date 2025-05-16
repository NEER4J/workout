import DayClientPage from "../components/DayClientPage";
import { Suspense } from "react";

type Params = {
  dayCode: string;
};

export default function Page({ 
  params 
}: { 
  params: Params
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DayClientPage dayCode={params.dayCode} />
    </Suspense>
  );
} 