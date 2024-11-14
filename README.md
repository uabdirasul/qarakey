# Karakalpak Keyboards

[Karakalpak Keyboards](https://kk-keyboards.vercel.app/) is a dedicated platform for Karakalpak language users, providing downloadable Latin-script (for now) keyboards optimized for typing unique characters like á, ú, ń, .... It includes straightforward installation guides for desktop and mobile devices, enhancing accessibility and ease of use in Karakalpak. Perfect for language enthusiasts, developers, and native speakers aiming to type accurately in Karakalpak.

(This project was developed by an ordinary ::dev, so please don’t expect perfectio:)

# KK Keyboards - Instructions for Download and Edit

1. **Clone the Repository**  
   Open your terminal and run:
   ```bash
   git clone https://github.com/uabdirasul/kk-keyboards.git

2. **Install Dependencies**  
   Navigate into the project directory:
   ```bash
   cd kk-keyboards
   npm install

3. **Add .env.local file**  
   Navigate into the project directory and add .env.local file:
   ```js
   NEXT_PUBLIC_DOWNLOAD_ID=
   NEXT_PUBLIC_POSTHOG_KEY=
   NEXT_PUBLIC_POSTHOG_HOST=

  DOWNLOAD_ID is from [Google Drive](https://drive.google.com/).   
  POSTHOG_ is from [Posthog](https://posthog.com/)
