import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello_world: "hello-world.html",
        contact: "contact.html",
        task: "task.html",
        counter: "counter.html",
        note: "note.html",
        "note-v1": "note-v1.html",
        "note-v2": "note-v2.html",
        "note-v3": "note-v3.html",
        profile: "profile.html",
        timer: "timer.html",
        guestbook: "guestbook.html",
        product: "product.html",
        online: "online.html",
      },
    },
  },
});
