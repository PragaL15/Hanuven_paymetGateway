import { useState } from 'react';
import news1 from '../Components/Assets/news1.jpg';
import news2 from '../Components/Assets/news2.jpg';
import news3 from '../Components/Assets/news3.jpg';

const newsItems = [
  { 
    id: 1,
    src: news1,
    alt: 'Startup Punjab Funding', 
    title: 'Hanuven Healthcare Receives Funding from Startup Punjab',
    content: 'Hanuven Healthcare Products Private Limited has been granted ₹3 lakhs in funding support from Startup Punjab, marking a significant milestone in our journey to revolutionize healthcare solutions.',
    date: 'March 15, 2024'
  },
  { 
    id: 2,
    src: news2,
    alt: 'Seed Fund Scheme', 
    title: 'Securing Seed Funding for R&D Expansion',
    content: 'We are excited to announce receiving seed funding from the "Startup India Seed Fund Scheme (SISFS)", enabling us to expand our research and development capabilities.',
    date: 'February 28, 2024'
  },
  { 
    id: 3,
    src: news3,
    alt: 'Hackathon Winner', 
    title: 'Top Honors at Startup Himachal Hackathon',
    content: 'Hanuven Healthcare Products Private Limited has been named the first-place winner at the prestigious Startup Himachal Hackathon, showcasing our innovative solutions.',
    date: 'January 20, 2024'
  }
];

export default function LatestNews() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section className="py-16 bg-gray-50" id="news">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Latest News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 cursor-pointer">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedNews(item)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2 cursor-pointer">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 cursor-pointer">{item.title}</h3>
                <p className="text-gray-600 overflow-hidden text-ellipsis line-clamp-3 cursor-pointer">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All News
          </button>
        </div>
      </div>

      {selectedNews && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedNews.src} 
                alt={selectedNews.alt} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{selectedNews.date}</p>
                <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>
                <p className="text-gray-600 leading-relaxed">{selectedNews.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}