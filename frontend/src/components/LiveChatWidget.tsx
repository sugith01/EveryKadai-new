import { useState, useRef, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';

export const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const widgetRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close when clicking outside both the widget and the trigger button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(val);
  };

  const isFormValid = name.trim().length > 0 && phone.trim().length === 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitted(true);

    const message = encodeURIComponent(
      `Hello EveryKadai Support! My name is ${name.trim()} and my contact number is ${phone.trim()}. I would like live assistance for my business.`
    );
    window.open(`https://wa.me/916366827420?text=${message}`, '_blank');

    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setName('');
      setPhone('');
    }, 2500);
  };

  return (
    <>
      {/* Pop-up Chat Box */}
      {isOpen && (
        <div
          ref={widgetRef}
          role="dialog"
          aria-label="Live Chat Support"
          className="fixed bottom-[94px] right-5 sm:right-6 z-50 w-[340px] sm:w-[360px] max-w-[calc(100vw-32px)] bg-white rounded-2xl p-6 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.25)] border border-slate-200/90 transition-all animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Close button in top-right corner */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
            aria-label="Close Chat"
          >
            <X className="h-4 w-4" />
          </button>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Connecting you now!</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Opening WhatsApp Live Support with an EveryKadai billing specialist...
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Support Team Online</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  How can we help you?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect with a GST &amp; Billing consultant instantly on WhatsApp.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label
                    htmlFor="chat-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 text-left"
                  >
                    Your Name
                  </label>
                  <input
                    id="chat-name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value.slice(0, 30))}
                    autoComplete="name"
                    className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="chat-phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 text-left"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-xs font-semibold text-slate-400">
                      +91
                    </span>
                    <input
                      id="chat-phone"
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={handlePhoneChange}
                      autoComplete="tel"
                      className="w-full pl-12 pr-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Submit / Connect Button */}
                <button
                  id="chat-submit"
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 mt-4 ${
                    isFormValid
                      ? 'btn-primary shadow-md cursor-pointer'
                      : 'bg-slate-150 text-slate-400 cursor-not-allowed opacity-75'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Start WhatsApp Chat</span>
                </button>
              </form>
            </>
          )}
        </div>
      )}

      {/* Floating Circular Live Button with pulsing status ring */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-[58px] h-[58px] rounded-full bg-white hover:bg-rose-50 flex items-center justify-center shadow-[0_8px_25px_-5px_rgba(225,29,72,0.35)] hover:shadow-[0_12px_30px_-5px_rgba(225,29,72,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group border-2 border-rose-100"
          title="Live Chat Support"
          aria-label="Live Chat Support"
          aria-expanded={isOpen}
        >
          {/* Active green status dot */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
          </span>

          <img
            src="/images/live-chat.png"
            alt="Live Chat"
            className="w-9 h-9 object-contain select-none pointer-events-none transition-transform group-hover:scale-110"
            loading="eager"
          />
        </button>
      </div>
    </>
  );
};
