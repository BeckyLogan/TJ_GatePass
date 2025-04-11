import { useEffect, useState } from 'react';

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatFullTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
  };

  const formatShortDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}-${day}`;
  };

  return (
    <div className="w-full h-screen bg-[#0066cc] flex justify-center items-center">
      {/* 背景为深蓝色 */}
      <div className="w-[90%] max-w-md bg-[#001a33] rounded-xl shadow-xl p-4">

        {/* 背景容器，设置宽高比为17:9 */}
        <div className="w-[90%] max-w-md bg-[#001a33] rounded-xl shadow-xl p-4 aspect-w-17 aspect-h-9"></div>
        {/* 顶部栏 - 图片左右布局 */}
        <div className="flex justify-between items-center bg-[#e6f3ff] p-2 rounded-t-xl h-12">
          {' '}
          {/* 设置固定高度 */}
          {/* 左侧图片 */}
          <img src="/嘉定校区.jpg" alt="嘉定校区" className="h-full" />
          {/* 右侧图片 */}
          <img src="/同济大学.jpg" alt="同济大学" className="h-full" />
        </div>

        {/* 主体区域 */}
        <div className="bg-[#e6f3ff] p-4 rounded-b-xl text-center">
          {/* 第一张图片 */}
          <img src="/个人照片.jpg" alt="Pass" className="w-2/5 mx-auto" />

          {/* 时间 */}
          <div className="mt-2 font-semibold text-lg">
            {formatFullTime(currentTime)}
          </div>

          {/* 第二张图片 */}
          <img
            src="/二维码.jpg"
            alt="Additional Info"
            className="w-1/2 mx-auto mt-2 border-2 border-[#39ff14]"
          />

          {/* 有效文字 */}
          <div className="text-[#39ff14] text-xl font-light mt-1">有效</div>
        </div>

        {/* 底部预约信息栏 */}
        <div className="mt-4 flex rounded-md ">
          {/* 左侧：预约时间 */}
          <div className="w-1/2 bg-[#005bb5] text-white p-2 text-center rounded-l">
            <div className="flex items-center justify-center space-x-1">
              <span className="text-sm font-light">预约时间</span>
              <span className="text-sm font-medium">
                {formatShortDate(currentTime)}
              </span>
            </div>
            <div className="text-base font-semibold mt-1">06:00:00</div>
          </div>

          {/* 右侧：预约进校门 */}
          <div className="w-1/2 bg-white text-center p-2 rounded-r">
            <div className="text-gray-500 text-sm">预约进校门</div>
            <div className="text-black text-base font-light mt-1">
              曹安公路4800号
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
