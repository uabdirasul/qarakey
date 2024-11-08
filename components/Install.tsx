import MdxLayout from "@/components/MdxLayout";
import InstallPage from "@/markdown/InstallPage.mdx";
import DownloadForWindows from "./DownloadForWindows";

const Install = () => {
  return (
    <MdxLayout>
      <DownloadForWindows />
      <InstallPage />
    </MdxLayout>
  );
};

export default Install;
