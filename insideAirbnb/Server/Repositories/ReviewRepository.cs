using insideAirbnb.Server.Repositories.interfaces;
using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace insideAirbnb.Server.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly insideAirbnbContext _context;

        public ReviewRepository(insideAirbnbContext context)
        {
            _context = context;
        }

        public record ReviewRecord(DateTime? Date, int count)
        {
            public override string ToString()
            {
                return $"{{ Date = {Date}, Count = {count} }}";
            }
        }

        public async Task<GraphReviews> GetReviewsPerDate()
        {
            List<ReviewRecord> amountReviews = await _context.Reviews.GroupBy(p => p.Date)
                .Select(g => new ReviewRecord(g.Key, g.Count())).AsNoTracking().ToListAsync();
            amountReviews = amountReviews.OrderByDescending(x => x.Date)
                .Take(200).ToList();

            List<DateTime> dates = new();
            List<int> counts = new();

            foreach (var t in amountReviews)
            {
                dates.Add((DateTime)t.Date);
                counts.Add(t.count);
            }

            return new GraphReviews(dates, counts);
        }
    }
}
