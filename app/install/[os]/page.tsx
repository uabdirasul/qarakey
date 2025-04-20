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
      <h1 className="text-[2rem] font-bold my-[1rem]">
        Qaraqalpaq tili klaviatura maketin &quot;{os.toUpperCase()}&quot;
        platformasında ornatıw
      </h1>
      <Component />
    </MdxLayout>
  );
};

export default Page;
