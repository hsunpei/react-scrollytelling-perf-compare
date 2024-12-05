import { SpringValue } from '@react-spring/web';

import { PhoneWrapper } from './components/PhoneWrapper';

interface BackgroundGraphicsProps {
  scrolledRatioSpring: SpringValue<number>;
}

export const BackgroundGraphics = ({ scrolledRatioSpring }: BackgroundGraphicsProps) => {
  return (
    <PhoneWrapper>
      {/*  Mobile phone content   */}
      <PhoneContent />
    </PhoneWrapper>
  );
};

export const PhoneContent = () => {
  return (
    <div className="w-full px-4 py-10">
      <div className="chat chat-start">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">From Daisy UI!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
};
