import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">تماس با ما</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"><Phone /></div>
            <h3 className="font-bold mb-2">تلفن</h3>
            <p className="text-gray-500 dir-ltr">021 - 88 77 66 55</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin /></div>
            <h3 className="font-bold mb-2">آدرس</h3>
            <p className="text-gray-500">تهران، خیابان ولیعصر، برج تجارت جهانی</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"><Mail /></div>
            <h3 className="font-bold mb-2">ایمیل</h3>
            <p className="text-gray-500">info@luxeshop.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}