import MdxLayout from "@/components/MdxLayout";
import LinuxInstall from "@/markdown/LinuxInstall.mdx";
import MacInstall from "@/markdown/MacInstall.mdx";
import WindowsInstall from "@/markdown/WindowsInstall.mdx";

// Define the type according to the error message structure
interface PageParams {
  params: Promise<{
    os: string;
  }>;
}

const OS = ["windows", "linux", "mac"];

export const dynamicParams = false;

export async function generateStaticParams() {
  return OS.map((os) => ({
    os: os
  }));
}

const Page = async ({ params }: PageParams) => {
  const { os } = await params;

  const components = {
    windows: WindowsInstall,
    linux: LinuxInstall,
    mac: MacInstall
  };

  const Component = components[os as keyof typeof components];

  return (
    <MdxLayout>
      <Component />
    </MdxLayout>
  );
};

export default Page;
