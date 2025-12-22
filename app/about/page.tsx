import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">درباره لوکس شاپ</h1>
            <p className="text-gray-500 leading-8 mb-6 text-justify">
              لوکس شاپ در سال ۱۴۰۴ با هدف ارائه محصولات مد و فشن با بالاترین کیفیت جهانی تاسیس شد. ما باور داریم که استایل هر فرد، امضای شخصیت اوست. تیم ما متشکل از طراحان و متخصصان مد، همواره در تلاش است تا جدیدترین ترندهای روز دنیا را با قیمتی رقابتی در اختیار شما قرار دهد.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <span className="block text-3xl font-bold text-blue-600 mb-1">+۴۰</span>
                <span className="text-sm text-gray-500">برند معتبر</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <span className="block text-3xl font-bold text-blue-600 mb-1">+۱۰k</span>
                <span className="text-sm text-gray-500">مشتری راضی</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
             <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" alt="دفتر کار" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}