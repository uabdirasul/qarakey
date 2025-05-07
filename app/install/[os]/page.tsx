import MdxLayout from "@/components/MdxLayout";
import LinuxInstall from "@/markdown/LinuxInstall.mdx";
import MacInstall from "@/markdown/MacInstall.mdx";
import WindowsInstall from "@/markdown/WindowsInstall.mdx";
import { Metadata } from "next";

interface PageParams {
  params: Promise<{
    os: string;
  }>;
}

const metadataMap: Record<string, Metadata> = {
  windows: {
    title: "Windows klaviatura maketin ornatıw",
    description: "Qaraqalpaq klaviatura maketin Windows ushın ornatıw"
  },
  linux: {
    title: "Linux klaviatura maketin ornatıw",
    description: "Qaraqalpaq klaviatura maketin Linux ushın ornatıw"
  },
  mac: {
    title: "Mac klaviatura maketin ornatıw",
    description: "Qaraqalpaq klaviatura maketin Mac ushın ornatıw"
  }
};

export async function generateMetadata({
  params
}: PageParams): Promise<Metadata> {
  const { os } = await params;

  return (
    metadataMap[os.toLowerCase()] || {
      title: "Klaviatura ornatıw",
      description: "Qaraqalpaqsha klaviatura maketin ornatıw instrukciyası"
    }
  );
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
      <h1 className="text-[1.5rem] sm:text-2xl md:text-3xl font-bold my-4 leading-snug">
        Qaraqalpaq tili klaviatura maketin &quot;{os.toUpperCase()}&quot;
        platformasında ornatıw
      </h1>
      <Component />
    </MdxLayout>
  );
};

export default Page;
