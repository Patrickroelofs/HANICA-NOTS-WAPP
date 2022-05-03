using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Repositories
{
    public interface IListingsRepository
    {
        Task<List<Listings>> getListings();
    }
}
