export type DownloadSoftware = {
  type: "download";
  charset?: string;
  url: string;
};

export type InstructionSoftware = {
  type: "instructions";
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
  | InstructionSoftware
  | StoreSoftware;

export type Asset = {
  name: string;
  softwares: SoftwareType[];
  original_source?: string;
};
