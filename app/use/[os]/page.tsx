import MdxLayout from "@/components/MdxLayout";
import LinuxUse from "@/markdown/LinuxUse.mdx";
import MacUse from "@/markdown/MacUse.mdx";
import WindowsUse from "@/markdown/WindowsUse.mdx";

interface PageParams {
  params: Promise<{
    os: string;
  }>;
}

export const dynamicParams = false;

const OS = ["windows", "linux", "mac"];

export async function generateStaticParams() {
  return OS.map((os) => ({
    os: os
  }));
}

const page = async ({ params }: PageParams) => {
  const { os } = await params;

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
