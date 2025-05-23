import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Gift" size={24} className="text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">
              Apple Gift
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Главная
            </a>
            <a
              href="#products"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Карты
            </a>
            <a
              href="#instructions"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Инструкции
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            Apple Gift Cards
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Подарите мир возможностей. Покупайте приложения, игры, музыку и
            многое другое в экосистеме Apple.
          </p>
          <Button
            onClick={scrollToProducts}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full h-auto transition-all duration-300 hover:scale-105"
          >
            Выбрать карту
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Выберите номинал
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Доступные номиналы Apple Gift Cards для покупок в App Store, iTunes
            Store и Apple Store
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { amount: "1 000", price: "1,000", popular: false },
              { amount: "2 500", price: "2,500", popular: true },
              { amount: "5 000", price: "5,000", popular: false },
            ].map((card, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${card.popular ? "ring-2 ring-blue-600" : ""}`}
              >
                {card.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-b-lg">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Icon name="Gift" size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {card.amount} ₽
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Apple Gift Card номиналом {card.amount} рублей
                  </p>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full transition-all duration-300">
                    Купить за {card.price} ₽
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions Preview */}
      <section id="instructions" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Как использовать
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Простые шаги для активации и использования вашей Apple Gift Card
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Получите код",
                desc: "После покупки вы получите уникальный код карты",
              },
              {
                step: "2",
                title: "Откройте App Store",
                desc: "Зайдите в App Store на вашем устройстве Apple",
              },
              {
                step: "3",
                title: "Активируйте",
                desc: "Введите код в разделе 'Погасить код купона'",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full"
          >
            Подробные инструкции
            <Icon name="ExternalLink" size={16} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Gift" size={24} className="text-blue-400" />
            <span className="text-xl font-semibold">Apple Gift</span>
          </div>
          <p className="text-gray-400 mb-6">
            Официальные Apple Gift Cards для экосистемы Apple
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия использования
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
