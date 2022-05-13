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
            List<Listings> list = await _context.Listings.Select(location => new Listings
            {
                Availability365 = location.Availability365,
                CalculatedHostListingsCount = location.CalculatedHostListingsCount,
                HostId = location.HostId,
                HostName = location.HostName,
                Id = location.Id,
                LastReview = location.LastReview,
                Latitude = location.Latitude,
                License = location.License,
                Longitude = location.Longitude,
                MinimumNights = location.MinimumNights,
                Name = location.Name,
                Neighbourhood = location.Neighbourhood,
                NeighbourhoodGroup = location.NeighbourhoodGroup,
                NumberOfReviews = location.NumberOfReviews,
                NumberOfReviewsLtm = location.NumberOfReviewsLtm,
                Price = location.Price,
                ReviewsPerMonth = location.ReviewsPerMonth,
                RoomType = location.RoomType,
            }).AsNoTracking().ToListAsync();

            return list;
        }

        public async Task<List<ListingsSummarized>> getSummarizedListings()
        {
            List<ListingsSummarized> list = await _context.Listings.Select(location => new ListingsSummarized
            {
                Id = location.Id,
                Latitude = location.Latitude,
                Longitude = location.Longitude,
                Name = location.Name,
                Price = location.Price,
            }).AsNoTracking().ToListAsync();

            return list;
        }

        public async Task<Listings> getById(int id)
        {
            Listings listing = await _context.Listings.Where(location => location.Id == id).Select(listing => new Listings
            {
                Availability365 = listing.Availability365,
                CalculatedHostListingsCount = listing.CalculatedHostListingsCount,
                HostId = listing.HostId,
                HostName = listing.HostName,
                Id = listing.Id,
                LastReview = listing.LastReview,
                Latitude = listing.Latitude,
                License = listing.License,
                Longitude = listing.Longitude,
                MinimumNights = listing.MinimumNights,
                Name = listing.Name,
                Neighbourhood = listing.Neighbourhood,
                NeighbourhoodGroup = listing.NeighbourhoodGroup,
                NumberOfReviews = listing.NumberOfReviews,
                NumberOfReviewsLtm = listing.NumberOfReviewsLtm,
                Price = listing.Price,
                ReviewsPerMonth = listing.ReviewsPerMonth,
                RoomType = listing.RoomType,
            }).AsNoTracking().FirstOrDefaultAsync();

            return listing;
        }
    }
}
