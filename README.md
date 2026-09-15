# 🌌 Sky Birthday — Website chúc mừng sinh nhật lấy cảm hứng từ Sky: Children of the Light

Một trang web chúc mừng sinh nhật tương tác, xây bằng **React + Vite + Tailwind CSS + Framer Motion**,
chia nhỏ theo component để bạn dễ dàng tuỳ chỉnh mà không phải sửa vào logic.

## 🚀 Chạy thử ở máy

```bash
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ Vite in ra (mặc định `http://localhost:5173`).

Build bản triển khai thật:

```bash
npm run build
npm run preview
```

Bạn có thể deploy thư mục `dist/` lên Vercel, Netlify, GitHub Pages... đều được, vì đây là một static site thuần.

## 🧩 Cấu trúc project

```
sky-birthday/
├─ src/
│  ├─ content.js          ← SỬA FILE NÀY để đổi tên, ngày sinh, lời chúc, ảnh, nhạc
│  ├─ App.jsx              ← ghép các component thành trang hoàn chỉnh
│  ├─ components/
│  │  ├─ StarField.jsx        (nền sao + hạt sáng + vệt sáng theo chuột)
│  │  ├─ EntryGate.jsx         (màn hình "bước vào bầu trời")
│  │  ├─ ConstellationNav.jsx  (nav dạng chòm sao, cuộn tới từng phần)
│  │  ├─ HeroSky.jsx           (tên hiện dần theo hiệu ứng gõ chữ)
│  │  ├─ LetterReveal.jsx      (nút mở thư + hiệu ứng chữ chạy)
│  │  ├─ CountdownCandles.jsx  (đếm ngược bằng nến)
│  │  ├─ CandleWishes.jsx      (chạm vào sao để mở dần lời chúc)
│  │  ├─ MemoryTimeline.jsx    (dòng thời gian kỷ niệm kèm ảnh)
│  │  ├─ LanternRelease.jsx    (nhập lời chúc, thả đèn lồng bay lên)
│  │  ├─ MusicToggle.jsx       (nút bật/tắt nhạc nền)
│  │  ├─ EasterEgg.jsx         (tinh linh ẩn, chạm đủ số lần mở khoá lời chúc bí mật)
│  │  └─ Footer.jsx            (lời kết)
├─ public/
│  ├─ photos/   ← để ảnh thật vào đây
│  └─ music/    ← để nhạc nền vào đây
```

## ✏️ Tuỳ chỉnh nhanh (không cần biết code)

Mở `src/content.js`, đây là **nơi duy nhất** bạn cần sửa:

- `name`, `birthday` — tên và ngày sinh người được chúc
- `heroTagline`, `heroLede` — dòng giới thiệu đầu trang
- `avatar` — đường dẫn ảnh đại diện (đặt file vào `public/photos`)
- `letter` — nội dung bức thư bí mật (tiêu đề, nội dung, chữ ký)
- `starWishes` — mảng 5 câu chúc, mỗi câu ứng với 1 ngôi sao
- `timeline` — các mốc kỷ niệm (ngày, tiêu đề, mô tả, ảnh)
- `lanternSeeds` — vài lời chúc mẫu tự thả sẵn khi trang vừa mở
- `easterEgg` — số lần cần chạm và lời chúc bí mật ẩn
- `music` — đường dẫn file nhạc nền (để trống `''` nếu chưa có nhạc)

Muốn thêm/bớt vì sao trong phần "Thắp sáng những vì sao"? Chỉ cần thêm/bớt phần tử
trong mảng `starWishes` — component tự động sinh đủ số sao tương ứng (tối đa 5 vị trí dựng sẵn,
có thể thêm toạ độ trong `CandleWishes.jsx` nếu muốn nhiều hơn).

## 🎨 Đổi màu / phong cách

Bảng màu nằm ở `tailwind.config.js` (mục `theme.extend.colors`):
`deep`, `dusk`, `dusk2`, `gold`, `goldsoft`, `teal`, `rose`, `cloth`.
Đổi mã hex ở đây sẽ áp dụng cho toàn bộ trang.

## 📱 Responsive

Toàn bộ layout dùng đơn vị co giãn (`clamp`, `%`, flex-wrap) và ẩn `ConstellationNav`
trên màn hình nhỏ hơn `md` để tối ưu trải nghiệm mobile trước, vẫn đẹp trên desktop.

## ⚠️ Lưu ý

- Nhạc nền: hãy dùng nhạc bạn có quyền sử dụng (tự sáng tác / royalty-free / đã mua bản quyền).
- Ảnh cá nhân: đặt trực tiếp vào `public/photos`, không cần build lại gì thêm.
