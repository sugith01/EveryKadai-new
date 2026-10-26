import { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';

export const RatingWidget = () => {
  const [rating, setRating] = useState(4.8);
  const [votes, setVotes] = useState(32808);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (stars: number) => {
    if (!hasVoted) {
      setRating(Number(((rating * votes + stars) / (votes + 1)).toFixed(2)));
      setVotes(votes + 1);
      setHasVoted(true);
    }
  };

  const activeScore = hoverRating !== null ? hoverRating : Math.round(rating);

  return (
    <section className="bg-slate-50/70 border-t border-slate-200/80 py-14 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold mb-3">
          <ThumbsUp className="w-3.5 h-3.5" />
          <span>User Feedback</span>
        </div>

        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-2 tracking-tight">
          How Useful is EveryKadai for Your Business?
        </h2>
        <p className="text-[14px] sm:text-[15px] text-slate-500 mb-6">
          Click on a star to share your rating with our product team!
        </p>

        {/* Interactive Star Row */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4">
          {[1, 2, 3, 4, 5].map((star) => {
            const isFilled = star <= activeScore;
            return (
              <button
                key={star}
                type="button"
                disabled={hasVoted}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(null)}
                onClick={() => handleVote(star)}
                className="p-1.5 transition-all duration-200 hover:scale-125 cursor-pointer disabled:cursor-default focus:outline-hidden"
                aria-label={`Rate ${star} out of 5 stars`}
              >
                <Star
                  className={`w-9 h-9 sm:w-10 sm:h-10 transition-colors duration-200 ${
                    isFilled
                      ? 'fill-amber-400 text-amber-400 drop-shadow-[0_2px_8px_rgba(245,158,11,0.35)]'
                      : 'fill-slate-200 text-slate-200'
                  }`}
                />
              </button>
            );
          })}
        </div>

        <p className="text-xs sm:text-sm font-semibold text-slate-700">
          Average Rating: <span className="text-rose-600 font-extrabold">{rating.toFixed(2)}</span> / 5.00 &nbsp;•&nbsp; Based on {votes.toLocaleString()} verified ratings
        </p>

        {hasVoted && (
          <p className="text-xs sm:text-sm font-semibold text-emerald-600 mt-3 animate-in fade-in duration-200">
            Thank you for rating! Your feedback helps us build better tools for Indian MSMEs.
          </p>
        )}
      </div>
    </section>
  );
};
