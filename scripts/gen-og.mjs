import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';

// og image — square for clean thumbnail in iMessage
const og = createCanvas(600, 600);
const ogCtx = og.getContext('2d');
ogCtx.fillStyle = '#111110';
ogCtx.fillRect(0, 0, 600, 600);
ogCtx.fillStyle = '#e4e4e2';
ogCtx.font = 'bold 260px monospace';
ogCtx.textAlign = 'center';
ogCtx.textBaseline = 'middle';
ogCtx.fillText('x', 300, 300);
writeFileSync('public/og-image.png', og.toBuffer('image/png'));
console.log('Generated public/og-image.png');

// favicon — 64x64 PNG used as ico replacement
const fav = createCanvas(64, 64);
const favCtx = fav.getContext('2d');
favCtx.fillStyle = '#111110';
favCtx.roundRect(0, 0, 64, 64, 10);
favCtx.fill();
favCtx.fillStyle = '#e4e4e2';
favCtx.font = 'bold 40px monospace';
favCtx.textAlign = 'center';
favCtx.textBaseline = 'middle';
favCtx.fillText('x', 32, 33);
writeFileSync('public/favicon.png', fav.toBuffer('image/png'));
console.log('Generated public/favicon.png');
