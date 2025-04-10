import MdxLayout from "@/components/MdxLayout";
import LinuxUse from "@/markdown/LinuxUse.mdx";
import MacUse from "@/markdown/MacUse.mdx";
import WindowsUse from "@/markdown/WindowsUse.mdx";
import { notFound } from "next/navigation";

interface PageParams {
  params: Promise<{
    os: string;
  }>;
}

const validOs = ["windows", "linux", "mac"];

const page = async ({ params }: PageParams) => {
  const { os } = await params;

  if (!validOs.includes(os)) {
    notFound();
  }

  const components = {
    windows: WindowsUse,
    linux: LinuxUse,
    mac: MacUse
  };

  const Component = components[os as keyof typeof components];

  return (
    <MdxLayout>
      <Component />
    </MdxLayout>
  );
};

export default page;
