import { ImageResponse } from 'next/og'
 
// تنظیمات سایز و نوع فایل
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// تولید خودکار آیکون از روی کد
export default function Icon() {
  return new ImageResponse(
    (
      // کانتینر اصلی
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%', // کمی گوشه‌هاش گرد باشه
        }}
      >
        {/* این همون کد SVG لوگوی الماس شماست */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2563eb" // رنگ آبی (Blue-600)
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* الماس */}
          <path d="M6 9l6-7 6 7-6 13-6-13z" style={{ fill: '#eff6ff' }} /> 
          {/* خط وسط */}
          <path d="M6 9h12" />
          {/* خط عمودی */}
          <path d="M12 2v20" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}