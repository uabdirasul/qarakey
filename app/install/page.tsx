import Install from "@/components/Install";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maketlerdi ornatıw",
  description:
    "Qaraqalpaq tilindegi klaviatura maketlerin ornatıw instrukciyası"
};

const page = () => {
  return <Install />;
};

export default page;
