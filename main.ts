import {time} from "./lib/times"

import { readFileSync } from 'fs';
import { join } from 'path';

// Lire le fichier HTML une seule fois
const html = readFileSync(join('template', 'index.html'), 'utf-8');

import {time} from "./lib/times"

import { readFileSync } from 'fs';
import { join } from 'path';

// Lire le fichier HTML une seule fois
const html = readFileSync(join('template', 'index.html'), 'utf-8');

Bun.serve({
  port: 9000, // Utiliser un autre port
  // hostname: "mydomain.me",
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response(html, {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/time") {
      return new Response(JSON.stringify({ currentTime: time() }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response("404!", { status: 404 });
    if (url.pathname === "/") {
      return new Response(html, {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/time") {
      return new Response(JSON.stringify({ currentTime: time() }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response("404!", { status: 404 });
  },
});

