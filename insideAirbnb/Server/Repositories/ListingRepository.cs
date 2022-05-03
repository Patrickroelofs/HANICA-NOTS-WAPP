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

        public async Task<List<Listings>> getListings()
        {
            List<Listings> list = await _context.Listings.Select(location => new Listings
            {
                Id = location.Id,
                Latitude = location.Latitude,
                Longitude = location.Longitude,
                Name = location.Name,
                Price = location.Price,
            }).AsNoTracking().ToListAsync();

            return list;
        }
    }
}
