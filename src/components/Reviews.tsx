import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Александр М.",
      rating: 5,
      text: "Промокод BON150 реально работает! Получил +125% к депозиту и 50 фриспинов за Telegram. Рекомендую!",
      date: "15 января 2025"
    },
    {
      name: "Елена К.",
      rating: 5,
      text: "Отличные бонусы! Привязка Telegram заняла пару минут, а фриспины пришли сразу. Кэшбэк тоже работает.",
      date: "12 января 2025"
    },
    {
      name: "Дмитрий П.",
      rating: 4,
      text: "Хороший промокод, особенно понравилось что вейджер зависит от уровня. Чем больше играешь, тем легче отыгрывать.",
      date: "8 января 2025"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Отзывы пользователей
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="text-sm text-gray-500">
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;