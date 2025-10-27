import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Wrench",
      title: "Ремонт смесителей",
      description: "Замена картриджей, прокладок, устранение протечек"
    },
    {
      icon: "Droplets",
      title: "Установка сантехники",
      description: "Монтаж раковин, унитазов, ванн и душевых кабин"
    },
    {
      icon: "Gauge",
      title: "Замена труб",
      description: "Работа с металлопластиком, полипропиленом, медью"
    },
    {
      icon: "CircuitBoard",
      title: "Водоснабжение",
      description: "Разводка труб холодной и горячей воды"
    },
    {
      icon: "Wind",
      title: "Канализация",
      description: "Прочистка, ремонт и монтаж канализационных систем"
    },
    {
      icon: "Thermometer",
      title: "Отопление",
      description: "Установка радиаторов, монтаж теплого пола"
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "Оперативно",
      description: "Выезд в день обращения"
    },
    {
      icon: "ShieldCheck",
      title: "Качественно",
      description: "Гарантия на все виды работ"
    },
    {
      icon: "BadgeCheck",
      title: "Надежно",
      description: "Более 10 лет опыта"
    },
    {
      icon: "Wallet",
      title: "Честно",
      description: "Прозрачное ценообразование"
    }
  ];

  const prices = [
    {
      category: "Ремонт смесителей",
      items: [
        { name: "Замена картриджа", price: "от 800 ₽" },
        { name: "Замена прокладок", price: "от 500 ₽" },
        { name: "Устранение протечки", price: "от 1 000 ₽" }
      ]
    },
    {
      category: "Установка сантехники",
      items: [
        { name: "Установка раковины", price: "от 2 500 ₽" },
        { name: "Установка унитаза", price: "от 3 000 ₽" },
        { name: "Установка душевой кабины", price: "от 5 000 ₽" }
      ]
    },
    {
      category: "Замена труб",
      items: [
        { name: "Замена труб (за 1 м)", price: "от 800 ₽" },
        { name: "Разводка водопровода", price: "от 5 000 ₽" },
        { name: "Монтаж полипропилена", price: "от 1 000 ₽/м" }
      ]
    },
    {
      category: "Прочие работы",
      items: [
        { name: "Прочистка канализации", price: "от 1 500 ₽" },
        { name: "Установка радиатора", price: "от 3 500 ₽" },
        { name: "Выезд мастера", price: "Бесплатно" }
      ]
    }
  ];

  const gallery = [
    {
      image: "https://cdn.poehali.dev/projects/08a976ba-5dc6-42a4-97b6-5a7dd41ed590/files/028a1bf0-43ee-4c37-941f-118c451c3018.jpg",
      title: "Установка смесителя",
      description: "Современная сантехника премиум-класса"
    },
    {
      image: "https://cdn.poehali.dev/projects/08a976ba-5dc6-42a4-97b6-5a7dd41ed590/files/2c20635c-9ed8-4fc1-8eae-518c27263b80.jpg",
      title: "Монтаж унитаза",
      description: "Профессиональная установка сантехники"
    },
    {
      image: "https://cdn.poehali.dev/projects/08a976ba-5dc6-42a4-97b6-5a7dd41ed590/files/56f45331-a284-46ed-bba2-58230584dece.jpg",
      title: "Установка радиатора",
      description: "Качественные системы отопления"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">Домашний Мастер</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors font-medium">Цены</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">Работы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button size="lg" className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Профессиональные сантехнические услуги
              </h1>
              <p className="text-xl text-muted-foreground">
                Решим любую проблему с сантехникой быстро и качественно. Выезд мастера в день обращения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (995) 146-29-28
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                  Оставить заявку
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/projects/08a976ba-5dc6-42a4-97b6-5a7dd41ed590/files/7bc59dda-297f-4747-9ed7-c29f53b438ba.jpg" 
                  alt="Профессиональный сантехник"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon name={advantage.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выполняем весь спектр сантехнических работ для квартир, домов и коммерческих помещений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-muted/50 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Нужна консультация?</h3>
                <p className="text-muted-foreground">Позвоните нам или оставьте заявку — ответим на все вопросы</p>
              </div>
              <Button size="lg" className="text-lg whitespace-nowrap">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены</h2>
            <p className="text-xl text-muted-foreground">
              Прозрачное ценообразование — окончательная цена обсуждается после осмотра
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {prices.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-primary text-primary-foreground p-4">
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center pb-3 border-b border-border last:border-0 last:pb-0">
                        <span className="text-foreground">{item.name}</span>
                        <span className="font-bold text-primary text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary/5 border-2 border-primary/20 rounded-2xl text-center">
            <Icon name="Info" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Точная стоимость после осмотра</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Указанные цены являются ориентировочными. Окончательная стоимость работ определяется после бесплатного выезда мастера и осмотра объекта.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">
              Примеры выполненных проектов с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-background">
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-background/90">{item.description}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6 text-lg">
              Более 500 довольных клиентов за 10 лет работы
            </p>
            <Button size="lg" className="text-lg" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Телефон</h3>
                      <a href="tel:+79951462928" className="text-xl text-primary hover:underline">
                        +7 (995) 146-29-28
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 22:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <a href="mailto:info@domashniy-master.ru" className="text-primary hover:underline">
                        info@domashniy-master.ru
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground">
                        г. Череповец<br />
                        Работаем по всему городу
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Описание проблемы
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Опишите вашу проблему..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Wrench" size={24} className="text-primary" />
            <span className="text-xl font-bold">Домашний Мастер</span>
          </div>
          <p className="text-background/70">
            © 2024 Домашний Мастер. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;