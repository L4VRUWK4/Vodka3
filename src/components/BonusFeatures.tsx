import React from 'react';
import { Gift, Percent, RefreshCw, Star } from 'lucide-react';

const BonusFeatures: React.FC = () => {
  const features = [
    {
      icon: <Percent className="w-8 h-8 text-blue-500" />,
      title: "+125% на первый депозит",
      description: "Увеличьте свой первый депозит в 2.25 раза"
    },
    {
      icon: <Gift className="w-8 h-8 text-red-500" />,
      title: "+50FS за привязку Телеграма",
      description: "Получите 50 бесплатных вращений за подключение Telegram"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-green-500" />,
      title: "+1% кэшбэк по промокоду",
      description: "Постоянный возврат средств с каждой игры"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: "До 300 фриспинов",
      description: "За депозит от 1500₽ (обновляется каждую неделю)"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Что дает промокод BON150
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-red-50 rounded-xl">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              "Без вейджера"
            </h3>
            <p className="text-gray-600">
              Ставка зависит от уровня игрока — чем выше уровень, тем меньше требований!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusFeatures;