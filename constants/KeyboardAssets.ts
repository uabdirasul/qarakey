export const KEYBOARD_ASSETS = [
  {
    name: "Windows OS Keyboard",
    softwares: [
      {
        type: "download",
        charset: "latin",
        url: "/download_assets/windows/qq-lat.zip"
      },
      {
        type: "download",
        charset: "cyrillic",
        url: "/download_assets/windows/qq-cyr.zip"
      }
    ],
    original_source: "https://jiemurat.github.io/QQ-kbd/"
  },
  {
    name: "Linux OS Keyboard",
    softwares: [
      {
        type: "instructions",
        url: "/install"
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
