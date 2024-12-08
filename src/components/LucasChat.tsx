interface LucasChatProps {
  time: string;
  message: string;
}

export const LucasChat = ({ time, message }: LucasChatProps) => {
  return (
    <div className="chat chat-end">
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
};
