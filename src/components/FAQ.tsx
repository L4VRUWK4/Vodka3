import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Как работает кэшбэк?",
      answer: "Кэшбэк 1% начисляется автоматически с каждой игры при использовании промокода BON150. Средства поступают на ваш баланс еженедельно."
    },
    {
      question: "Как часто обновляются фриспины?",
      answer: "Фриспины до 300 штук за депозит от 1500₽ обновляются каждую неделю. Количество может варьироваться в зависимости от акций казино."
    },
    {
      question: "Где вводить промокод?",
      answer: "Промокод BON150 вводится в разделе «Профиль» после регистрации. Найдите поле «Промокод» или «Бонусный код» и введите BON150."
    },
    {
      question: "Что значит «без вейджера»?",
      answer: "«Без вейджера» означает, что ставка на отыгрыш бонуса зависит от вашего уровня в казино. Чем выше уровень игрока, тем меньше требований к отыгрышу."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Часто задаваемые вопросы
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;