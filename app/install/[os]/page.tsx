import MdxLayout from "@/components/MdxLayout";
import LinuxInstall from "@/markdown/LinuxInstall.mdx";
import MacInstall from "@/markdown/MacInstall.mdx";
import WindowsInstall from "@/markdown/WindowsInstall.mdx";
import { notFound } from "next/navigation";

// Define the type according to the error message structure
interface PageParams {
  params: Promise<{
    os: string;
  }>;
}

const validOs = ["windows", "linux", "mac"];

const Page = async ({ params }: PageParams) => {
  const { os } = await params;

  if (!validOs.includes(os)) {
    notFound();
  }

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
