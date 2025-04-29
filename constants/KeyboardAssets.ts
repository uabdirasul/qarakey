import { Asset } from "@/types/software_type";

export const KEYBOARD_ASSETS: Asset[] = [
  {
    name: "Windows OS Keyboard",
    softwares: [
      {
        type: "download",
        charset: "latin",
        url: "/download_assets/windows/qq-lat.exe"
      },
      {
        type: "download",
        charset: "cyrillic",
        url: "/download_assets/windows/qq-cyr.exe"
      },
      {
        type: "install_instructions",
        url: "/install/windows"
      },
      {
        type: "use_instructions",
        url: "/use/windows"
      }
    ],
    original_source: "https://jiemurat.github.io/QQ-kbd/"
  },
  {
    name: "Linux OS Keyboard",
    softwares: [
      {
        type: "download",
        charset: "latin",
        url: "/download_assets/linux/kaa-latin"
      },
      {
        type: "download",
        charset: "cyrillic",
        url: "/download_assets/linux/kaa"
      },
      {
        type: "install_instructions",
        url: "/install/linux"
      },
      {
        type: "use_instructions",
        url: "/use/linux"
      }
    ],
    original_source: "https://github.com/jiemurat/kaa-kbd-layout"
  },
  {
    name: "Mac OS Keyboard",
    softwares: [
      {
        type: "download",
        url: "/download_assets/mac/qqkeyboard-mac.zip"
      },
      {
        type: "install_instructions",
        url: "/install/mac"
      },
      {
        type: "use_instructions",
        url: "/use/linux"
      }
    ],
    original_source: "https://github.com/shagalalab/qqkeyboard-mac/"
  },
  {
    name: "Android Keyboard",
    softwares: [
      {
        type: "store",
        store: "google_play",
        name: "QqKeyboard",
        url: "https://play.google.com/store/apps/details?id=com.shagalalab.qqkeyboard"
      }
    ]
  },
  {
    name: "iOS Keyboard",
    softwares: [
      {
        type: "store",
        store: "app_store",
        name: "Keyman",
        url: "https://apps.apple.com/us/app/keyman/"
      },
      {
        type: "store",
        store: "app_store",
        name: "Microsoft SwiftKey",
        url: "https://apps.apple.com/us/app/microsoft-swiftkey-ai-keyboard/"
      }
    ]
  }
];
