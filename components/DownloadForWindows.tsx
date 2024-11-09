import Image from "next/image";

const DownloadForWindows = () => {
  return (
    <div className="pt-6 flex flex-col items-center justify-center">
      <Image
        src="https://i.ibb.co/nL075Wx/windows-logo.png"
        alt="Windows Logo"
        width={250}
        height={250}
      />
      <span className="bg-blue-600 px-4 py-2 rounded-md mt-4">
        Windows 7, 8, 10, 11
      </span>
      <div className="p-5 flex justify-around w-full flex-col md:flex-row">
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 px-14 py-4 rounded-md text-center m-2">
          <p className="bg-blue-500 px-3 py-1 rounded-md text-center">
            x32 bit
          </p>
          <p className="mt-6">
            MSI download —{" "}
            <button className="bg-blue-600 p-2 rounded-md">Download</button>
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 px-14 py-4 rounded-md text-center m-2">
          <p className="bg-blue-500 px-3 py-1 rounded-md text-center">
            x64 bit
          </p>
          <p className="mt-6">
            MSI download —{" "}
            <button className="bg-blue-600 p-2 rounded-md">Download</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadForWindows;
