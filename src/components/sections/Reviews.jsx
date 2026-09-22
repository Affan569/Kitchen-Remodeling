import { Container, Highlight } from "../ui";
import { reviewsSection, reviews } from "../../data";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="relative z-10 bg-gray-50 py-20">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand">
            {reviewsSection.eyebrow}
          </p>
          <h1 className="text-ink pb-2">
            {reviewsSection.titleStart} {reviewsSection.titleHighlight}
          </h1>
          <div className="mx-auto mt-6 rounded-full bg-brand" style={{ height: "4px", width: "96px" }} />
          <p className="mt-5 text-muted">{reviewsSection.text}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(function (review) {
            return (
              <div
                key={review.id}
                className="rounded-lg border border-brand/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(review.rating)].map(function (_, i) {
                    return (
                      <Star
                        key={i}
                        size={16}
                        className="fill-brand text-brand"
                      />
                    );
                  })}
                </div>
                <p className="mb-4 text-ink italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-tint text-brand font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{review.name}</p>
                    <p className="text-sm text-muted">{review.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}