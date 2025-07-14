import React from 'react';
import { UserPlus, Code, MessageCircle } from 'lucide-react';

const Instructions: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-blue-500" />,
      title: "Зарегистрируйтесь",
      description: "Создайте аккаунт на сайте Vodka Casino"
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: "Введите промокод",
      description: "Введите промокод BON150 в Профиле"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "Привяжите Telegram",
      description: "Подключите Telegram и получите бесплатные вращения"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Как получить бонус
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                {step.icon}
              </div>
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructions;