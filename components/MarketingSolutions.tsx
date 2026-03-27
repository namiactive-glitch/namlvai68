import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Inbox, 
  Zap, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  BarChart3,
  Globe
} from 'lucide-react';

const MarketingSolutions: React.FC = () => {
  const solutions = [
    {
      id: 'fchat',
      title: 'Fchat - Chatbot & Marketing Automation',
      description: 'Giải pháp Chatbot tự động phản hồi khách hàng 24/7 trên Fanpage, Zalo, Website.',
      icon: <MessageSquare className="text-blue-500" />,
      link: 'https://fchat.vn?ref=namlv',
      features: [
        'Tự động trả lời bình luận và tin nhắn',
        'Gửi tin nhắn hàng loạt cho khách hàng cũ',
        'Quản lý đơn hàng và tồn kho thông minh',
        'Tích hợp nhiều kênh bán hàng'
      ],
      color: 'border-blue-100 hover:border-blue-300'
    },
    {
      id: 'fbinbox',
      title: 'Facebook AutoInbox - Gửi tin nhắn hàng loạt',
      description: 'Gửi tin nhắn hàng loạt cho khách cũ trên FANPAGE với nội dung chứa quảng cáo kèm ảnh, Link!',
      icon: <Inbox className="text-indigo-500" />,
      link: 'https://fbinbox.net/?ref=namlv',
      features: [
        'Gửi tin nhắn hàng loạt cho khách hàng cũ',
        'Nội dung chứa quảng cáo kèm ảnh và Link',
        'Tối ưu hóa tỷ lệ tiếp cận khách hàng',
        'Quản lý chiến dịch gửi tin chuyên nghiệp'
      ],
      color: 'border-indigo-100 hover:border-indigo-300'
    },
    {
      id: 'zinbox',
      title: 'Zinbox - Marketing Zalo OA chuyên sâu',
      description: 'Hệ thống gửi tin nhắn Zalo OA hàng loạt và chăm sóc khách hàng tự động trên Zalo.',
      icon: <Zap className="text-yellow-500" />,
      link: 'https://zinbox.net/?ref=namlv',
      features: [
        'Gửi tin nhắn ZNS thông báo đơn hàng',
        'Chăm sóc khách hàng cũ qua Zalo OA',
        'Tăng tỷ lệ chuyển đổi từ khách hàng quan tâm',
        'Quản lý danh sách khách hàng Zalo tập trung'
      ],
      color: 'border-yellow-100 hover:border-yellow-300'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <div className="text-center space-y-4">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block p-4 bg-orange-100 rounded-3xl text-orange-600 mb-2"
        >
          <TrendingUp size={48} />
        </motion.div>
        <h1 className="text-4xl font-medium text-slate-800 tracking-tight">GIẢI PHÁP MARKETING DOANH NGHIỆP</h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
          Tối ưu hóa quy trình bán hàng, tự động hóa chăm sóc khách hàng và tăng trưởng doanh thu với các công cụ hàng đầu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, idx) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-white p-8 rounded-[2.5rem] border ${solution.color} shadow-sm hover:shadow-xl transition-all group flex flex-col h-full`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 leading-tight">{solution.title}</h3>
            </div>
            
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {solution.description}
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {solution.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-500">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={solution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-slate-900 hover:bg-orange-600 text-white rounded-2xl text-sm font-medium transition-all flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-orange-200"
            >
              Tìm hiểu thêm
              <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <Globe className="text-orange-400" />
              Tại sao nên sử dụng các giải pháp này?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-orange-400" />
                <span>Tiếp cận hàng triệu khách hàng</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 size={18} className="text-orange-400" />
                <span>Tăng tỷ lệ chuyển đổi 30-50%</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-orange-400" />
                <span>Tiết kiệm 80% thời gian trực chat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-orange-400" />
                <span>Chuyên nghiệp hóa quy trình</span>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center">
              <p className="text-orange-400 font-bold text-3xl mb-1">24/7</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">Hỗ trợ tự động</p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </div>

      <div className="text-center">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Hệ thống phát triển bởi Nam Lê AI</p>
      </div>
    </div>
  );
};

export default MarketingSolutions;
