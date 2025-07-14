import React from 'react';
import { User, Shield, Bot, Play } from 'lucide-react';

const TelegramGuide: React.FC = () => {
  const steps = [
    {
      icon: <User className="w-6 h-6 text-blue-500" />,
      text: "Нажмите на значок человека (в правом верхнем углу)"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      text: "Перейдите в «Профиль – Безопасность»"
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-500" />,
      text: "Найдите ссылку на Телеграм-бота и ваш «Телеграм код»"
    },
    {
      icon: <Bot className="w-6 h-6 text-red-500" />,
      text: "Перейдите в бот → введите команду /start <код>"
    },
    {
      icon: <Play className="w-6 h-6 text-orange-500" />,
      text: "Выберите слот на вкладке «Бонус», чтобы получить 50 FS"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Как привязать Telegram
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-2 shadow-md flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 font-medium">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramGuide;