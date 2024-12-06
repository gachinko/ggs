import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">お問い合わせ</h2>
          <p className="mt-4 text-lg text-gray-500">
            サービスについてのご質問・ご相談はこちら
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="relative rounded-lg bg-white p-8 shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3 text-base">
                <p className="font-medium text-gray-900">メール</p>
                <a href="mailto:contact@gachin.co" className="mt-1 text-gray-500 hover:text-blue-600 transition-colors">
                  contact@gachin.co
                </a>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg bg-white p-8 shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3 text-base">
                <p className="font-medium text-gray-900">所在地</p>
                <p className="mt-1 text-gray-500">熊本県合志市須屋2659-2</p>
                <p className="text-gray-500">(熊本高等専門学校 熊本キャンパス)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}