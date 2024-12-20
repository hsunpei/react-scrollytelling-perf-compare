import { forwardRef } from 'react';

interface LucasChatProps {
  time: string;
  message: string;
}

export const LucasChat = forwardRef<HTMLDivElement | null, LucasChatProps>(
  ({ time, message }, ref) => {
    return (
      <div ref={ref} className="chat chat-end px-2">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full bg-emerald-300">
            <img alt="Tailwind CSS chat bubble component" src="/images/avatar_54.png" />
          </div>
        </div>
        <div className="chat-header">
          Lucas
          <time className="ml-2 text-xs opacity-50">{time}</time>
        </div>
        <div className="chat-bubble chat-bubble-primary">{message}</div>
      </div>
    );
  }
);
