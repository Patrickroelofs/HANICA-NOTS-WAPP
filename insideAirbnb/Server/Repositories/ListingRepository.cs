using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace insideAirbnb.Server.Repositories
{
    public class ListingRepository : IListingsRepository
    {
        private readonly insideAirbnbContext _context;

        public ListingRepository(insideAirbnbContext context)
        {
            _context = context;
        }

        public async Task<List<Listings>> getAllListings()
        {
            List<Listings> list = await _context.Listings.Where(location => location.Id != null).Select(location => location).AsNoTracking().ToListAsync();

            return list;
        }

        public async Task<List<Geo>> GetGeoJSONListings()
        {
            List<Geo> list = await _context.Listings.Select(location => new Geo
            {
                HostName = location.HostName,
                Id = location.Id,
                Latitude = location.Latitude,
                Longitude = location.Longitude,
                Name = location.Name,
                Price = location.Price,
            }).ToListAsync();

            return list;
        }

        public async Task<List<Geo>> GetGeoJSONListingsByNeighbourhood(string neighbourhood)
        {
            List<Geo> list = await _context.Listings.Where(listing => listing.NeighbourhoodCleansed == neighbourhood).Select(location => new Geo
            {
                HostName = location.HostName,
                Id = location.Id,
                Latitude = location.Latitude,
                Longitude = location.Longitude,
                Name = location.Name,
                Price = location.Price,
            }).ToListAsync();

            return list;
        }

        public async Task<Listings> getById(int id)
        {
            Listings listing = await _context.Listings.Where(location => location.Id == id).Select(location => location).AsNoTracking().FirstOrDefaultAsync();

            return listing;
        }
    }
}
