// دیتابیس محصولات (شبیه‌سازی شده)

export interface Product {
  id: string;
  name: string;
  price: string;
  priceNum: number; // قیمت عددی برای محاسبات
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  features: string[];
}

// لیست محصولات پایه (۱۲ مدل واقعی)
const baseProducts = [
  // --- مردانه ---
  {
    name: "کت تک کلاسیک ایتالیایی",
    price: "۳,۵۰۰,۰۰۰",
    priceNum: 3500000,
    category: "مردانه",
    categorySlug: "men",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    description: "این کت تک با پارچه پشمی اعلا و دوخت صنعتی، انتخابی بی‌نظیر برای آقایان شیک‌پوش است.",
    features: ["پارچه پشم خالص", "دوخت اسلیم فیت", "آستر ساتن"]
  },
  {
    name: "پیراهن نخی آستین بلند",
    price: "۹۵۰,۰۰۰",
    priceNum: 950000,
    category: "مردانه",
    categorySlug: "men",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
    description: "پیراهن خنک و راحت مناسب فصل تابستان با الیاف ۱۰۰٪ طبیعی.",
    features: ["ضد حساسیت", "رنگ ثابت", "بدون آبرفت"]
  },
  {
    name: "شلوار کتان راسته",
    price: "۱,۲۰۰,۰۰۰",
    priceNum: 1200000,
    category: "مردانه",
    categorySlug: "men",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800&auto=format&fit=crop",
    description: "شلوار کتان با کیفیت بالا و دوخت مقاوم، مناسب برای استفاده روزمره.",
    features: ["پارچه ترک", "زیپ فلزی", "چهار جیب"]
  },

  // --- زنانه ---
  {
    name: "مانتو کتی مجلسی",
    price: "۲,۸۰۰,۰۰۰",
    priceNum: 2800000,
    category: "زنانه",
    categorySlug: "women",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop",
    description: "طراحی مینیمال و خاص برای بانوان خوش‌سلیقه. مناسب مهمانی‌ها و جلسات.",
    features: ["کرپ مازراتی", "یقه انگلیسی", "آستین سه ربع"]
  },
  {
    name: "شومیز حریر طرح‌دار",
    price: "۸۹۰,۰۰۰",
    priceNum: 890000,
    category: "زنانه",
    categorySlug: "women",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=800&auto=format&fit=crop",
    description: "بسیار لطیف و سبک. طرح‌های اختصاصی که در هیچ فروشگاه دیگری نخواهید دید.",
    features: ["حریر درجه یک", "بدون بدن‌نمایی", "دکمه مخفی"]
  },
  {
    name: "پالتو فوتر بلند",
    price: "۴,۵۰۰,۰۰۰",
    priceNum: 4500000,
    category: "زنانه",
    categorySlug: "women",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=800&auto=format&fit=crop",
    description: "گرمای مطبوع در روزهای سرد زمستانی با استایلی خیره‌کننده.",
    features: ["فوتر کوبیده", "آستر دار", "کمربند دار"]
  },

  // --- ساعت و اکسسوری ---
  {
    name: "ساعت مچی کلاسیک رویال",
    price: "۸,۲۰۰,۰۰۰",
    priceNum: 8200000,
    category: "اکسسوری",
    categorySlug: "accessories",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
    description: "ساعتی که زمان را به سبک شما نشان می‌دهد. موتور ژاپنی و بند چرم طبیعی.",
    features: ["موتور ژاپن", "شیشه ضد خش", "ضد آب ۳ اتمسفر"]
  },
  {
    name: "عینک آفتابی خلبانی",
    price: "۱,۸۰۰,۰۰۰",
    priceNum: 1800000,
    category: "اکسسوری",
    categorySlug: "accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    description: "محافظت کامل از چشمان شما در برابر اشعه UV با طراحی جاودانه.",
    features: ["UV400", "فریم فلزی سبک", "لنز پلاریزه"]
  },
  {
    name: "کیف چرم طبیعی دوشی",
    price: "۳,۱۰۰,۰۰۰",
    priceNum: 3100000,
    category: "اکسسوری",
    categorySlug: "accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    description: "جادار، مقاوم و اصیل. همراه همیشگی شما در روزهای کاری.",
    features: ["چرم گاوی", "یراق آلات رنگ ثابت", "دو سال ضمانت"]
  },
   // --- کفش ---
   {
    name: "کفش رسمی چرم",
    price: "۲,۶۰۰,۰۰۰",
    priceNum: 2600000,
    category: "کفش",
    categorySlug: "shoes",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop",
    description: "راحتی و وقار در هر قدم. کفی طبی برای استفاده طولانی مدت.",
    features: ["کفی طبی", "چرم طبیعی", "واکس خور"]
  },
  {
    name: "کتانی رانینگ پرو",
    price: "۳,۹۰۰,۰۰۰",
    priceNum: 3900000,
    category: "کفش",
    categorySlug: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    description: "تکنولوژی روز دنیا برای سلامت پاهای شما هنگام ورزش.",
    features: ["تکنولوژی ایر", "بسیار سبک", "توری تنفسی"]
  },
  {
    name: "نیم‌بوت جیر مردانه",
    price: "۲,۱۰۰,۰۰۰",
    priceNum: 2100000,
    category: "کفش",
    categorySlug: "shoes",
    image: "https://images.unsplash.com/photo-1638361668270-36d9c636d93c?q=80&w=800&auto=format&fit=crop",
    description: "استایلی متفاوت برای فصل سرما. گرم و راحت.",
    features: ["جیر طبیعی", "دور دوزی شده", "کفی عاج‌دار"]
  },
];

// تابع تولید کننده ۴۸ محصول از روی ۱۲ محصول پایه
// برای اینکه شبیه محصولات تکراری نباشن، کمی اسم و آیدیشون رو تغییر میدیم
const generateProducts = () => {
  const allProducts: Product[] = [];
  let idCounter = 100;

  // ۴ بار تکرار میکنیم تا ۴۸ تا بشه
  for (let i = 0; i < 4; i++) {
    baseProducts.forEach((p) => {
      idCounter++;
      allProducts.push({
        ...p,
        id: idCounter.toString(),
        name: i === 0 ? p.name : `${p.name} مدل ${String.fromCharCode(65 + i)}`, // مثلا مدل A, B...
      });
    });
  }
  return allProducts;
};

export const products = generateProducts();

// توابع کمکی برای گرفتن دیتا
export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (slug: string) => products.filter(p => p.categorySlug === slug);