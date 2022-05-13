using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Repositories
{
    public interface IListingsRepository
    {
        Task<List<Listings>> getAllListings();
        Task<List<ListingsSummarized>> getSummarizedListings();

        Task<Listings> getById(int id);
    }
}
