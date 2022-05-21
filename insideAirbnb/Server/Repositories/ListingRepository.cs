using insideAirbnb.Server.Repositories.interfaces;
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

        public async Task<List<Geo>> GetGeoJSONListingsByNeighbourhood(FilterParameters parameters)
        {
            IQueryable<Geo> listings = _context.Listings.Select(listing => new Geo
            {
                HostName = listing.HostName,
                Id = listing.Id,
                Latitude = listing.Latitude,
                Longitude = listing.Longitude,
                Name = listing.Name,
                Price = listing.Price,
                Neighbourhood = listing.NeighbourhoodCleansed,
                NumberOfReviews = listing.NumberOfReviews,
            }); 
            
            if (!string.IsNullOrEmpty(parameters.Neighbourhood)) {
                listings = listings.Where(listing => listing.Neighbourhood == parameters.Neighbourhood);
            } 

            if (parameters.PriceFrom.HasValue) { 
                listings = listings.Where(listing => Convert.ToInt32(listing.Price) >= Convert.ToInt32(parameters.PriceFrom)); 
            }

            if (parameters.PriceTo.HasValue)
            {
                listings = listings.Where(listing => Convert.ToInt32(listing.Price) <= Convert.ToInt32(parameters.PriceTo));
            }

            if (parameters.ReviewsFrom.HasValue)
            {
                listings = listings.Where(listing => Convert.ToInt32(listing.NumberOfReviews) >= Convert.ToInt32(parameters.ReviewsFrom));
            }

            if(parameters.ReviewsTo.HasValue)
            {
                listings = listings.Where(listing => Convert.ToInt32(listing.NumberOfReviews) <= Convert.ToInt32(parameters.ReviewsTo));
            }

            return await listings.ToListAsync();
        }

        public async Task<Listings> getById(int id)
        {
            return await _context.Listings.Where(location => location.Id == id).Select(location => location).FirstOrDefaultAsync();
        }
    }
}
