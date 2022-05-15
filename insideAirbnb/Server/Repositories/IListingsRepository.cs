using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Repositories
{
    public interface IListingsRepository
    {
        Task<List<Listings>> getAllListings();
        Task<Listings> getById(int id);
        Task<List<Geo>> GetGeoJSONListings();
        Task<List<Geo>> GetGeoJSONListingsByNeighbourhood(FilterParameters parameters);
    }
}
