import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';

const w = 1200, h = 630;
const canvas = createCanvas(w, h);
const ctx = canvas.getContext('2d');

// background
ctx.fillStyle = '#111110';
ctx.fillRect(0, 0, w, h);

// "x"
ctx.fillStyle = '#e4e4e2';
ctx.font = 'bold 220px monospace';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('x', w / 2, h / 2);

writeFileSync('public/og-image.png', canvas.toBuffer('image/png'));
console.log('Generated public/og-image.png');
