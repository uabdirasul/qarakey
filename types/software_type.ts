export type DownloadSoftware = {
  type: "download";
  charset?: string;
  url: string;
};

export type InstallInstructions = {
  type: "install_instructions";
  url: string;
};

export type UseInstructions = {
  type: "use_instructions";
  url: string;
};

export type StoreSoftware = {
  type: "store";
  store: "google_play" | "app_store";
  name?: string;
  url: string;
};

export type SoftwareType =
  | DownloadSoftware
  | InstallInstructions
  | UseInstructions
  | StoreSoftware;

export type Asset = {
  name: string;
  softwares: SoftwareType[];
  original_source?: string;
};
