# For Surya, with love 💙

A romantic sky-blue birthday website built with React + Vite. It includes a responsive 12-photo album, 6-place album, 3 video slots, six clickable "open when" messages, a birthday letter reveal, floating hearts, and optional background music.

## Run locally
Install Node.js LTS from https://nodejs.org/. In this folder run:
```bash
npm install
npm run dev
```
Open the local URL shown by Vite.

## Add your real photos
- Our photo album: put up to 12 files in `public/photos/`, named `memory-01.jpg` through `memory-12.jpg`.
- Places album: put up to 6 files in `public/places/`, named `place-01.jpg` through `place-06.jpg`.

Use JPG filenames exactly as listed. If your image is PNG/WebP, convert it to JPG or update the file reference in `src/App.jsx`. Cards show a placeholder until the matching file exists. To add more photos, add objects to the `memories` or `places` arrays in `src/App.jsx`.

## Add videos
Put MP4 files in `public/videos/` named `memory-video-01.mp4`, `memory-video-02.mp4`, and `memory-video-03.mp4`. H.264 MP4 is a good compatibility choice.

## Add music
Put a song you own or have permission to use in `public/music/our-song.mp3`. Click the **Our song** button to start it; browsers usually block autoplay until a user clicks.

## Personalize the messages and letter
Open `src/App.jsx`. Edit the `messages` array to customize the six notes and edit the `love-letter` section for your own letter. Captions are in the `memories` and `places` arrays.

## Deploy to Vercel
1. Upload this project to a GitHub repository.
2. Sign in at https://vercel.com/ and choose **Add New → Project**.
3. Import your repository.
4. Set build command to `npm run build` and output directory to `dist`.
5. Deploy and test the generated URL on your phone.

## Privacy
The deployed site is public to anyone with the URL unless access controls are added. Only upload media and messages you are comfortable sharing.
