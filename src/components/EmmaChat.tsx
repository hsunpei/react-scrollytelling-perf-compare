import { forwardRef } from 'react';

import { AnimatedFadeIn } from './AnimatedFadeIn';

interface EmmaChatProps {
  time: string;
  message: string;
  show?: boolean;
}

export const EmmaChat = forwardRef<HTMLDivElement | null, EmmaChatProps>(
  ({ time, message, show }, ref) => {
    return (
      <AnimatedFadeIn start={!!show} initialXPosition={0} initialYPosition={-100} delay={10}>
        <div ref={ref} className="chat chat-start mb-2 px-2">
          <div className="avatar chat-image">
            <div className="w-10 rounded-full bg-blue-600">
              <img alt="Tailwind CSS chat bubble component" src="/images/avatar_51.png" />
            </div>
          </div>
          <div className="chat-header">
            Emma
            <time className="ml-2 text-xs opacity-50">{time}</time>
          </div>
          <div className="chat-bubble">{message}</div>
        </div>
      </AnimatedFadeIn>
    );
  }
);
