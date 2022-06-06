using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Repositories
{
    public interface IReviewRepository
    {
        Task<GraphReviews> GetReviewsPerDate();
    }
}
