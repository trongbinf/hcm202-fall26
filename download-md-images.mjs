import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const urls = [
  { name: 'duong-cach-menh.jpg', url: 'https://hochiminh.vn/publish/thumbnail/3000001/480x720xfull/upload/3000001/20251024/8952355cfd4f9213404028053b86c9c4duong-cach-menh-400x610.jpg' },
  { name: 'dang-lanh-dao.jpg', url: 'https://cdn.hvcsnd.edu.vn/uploads/2026/01/15/9/vna-potal-dang-lanh-dao-toan-dan-khang-chien-kien-quoc-stand-1768450408.jpg?q=75&f=6&s=f6qwwbvny_q' },
  { name: 'thanh-nien-cach-mang.jpg', url: 'https://file3.qdnd.vn/data/images/0/2025/01/06/upload_2058/33.jpg' },
  { name: 'ky-niem-30-nam.jpg', url: 'https://mediacdn.vinhlong.dcs.vn/media/2026/07/24/6a6332b47c365308b8a57a5f_3795f34f6cd3028e5003b3ff04a51683bac-ho-2018-01-31-15-50-300x180_high.jpg' },
  { name: 'dang-van-minh.jpg', url: 'https://file.thanhuyhanoi.vn/thanhuy/public/Uploads/TinTucThumbNail/2022/6/13/10019311/623fe9b2-9a9d-402f-9948-52fc36b74980.jpg' },
  { name: 'mat-thiet-nhan-dan.jpg', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnkwh4n_RwpvJOeX1BovO1r_igFlsyZX4u6ri0aoNLQ&s=10' },
  { name: 'cong-tac-can-bo.jpg', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG07cMX84UhF7lVIWYLWX82VosL_GFMYwy6rpWwpvwaatdYC7rWlIDD2I&s=10' },
  { name: 'tu-tuong-dan-chu.jpg', url: 'https://tuyengiao.hungyen.dcs.vn/images/userfiles/images/tu-tuong-ho-chi-minh-ve-dan-chu.jpg' }
];

fs.mkdirSync('src/assets/puzzles', { recursive: true });

async function download(item) {
  return new Promise((resolve) => {
    const dest = path.join('src/assets/puzzles', item.name);
    const client = item.url.startsWith('https') ? https : http;
    client.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('SUCCESS:', item.name, fs.statSync(dest).size, 'bytes');
          resolve(true);
        });
      } else {
        console.error('FAIL:', item.name, res.statusCode);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error('ERROR:', item.name, err.message);
      resolve(false);
    });
  });
}

for (const item of urls) {
  await download(item);
}
