using insideAirbnb.Shared;
using insideAirbnb.Server.Repositories;
using Microsoft.AspNetCore.Mvc;
using GeoJSON.Net.Feature;
using GeoJSON.Net.Geometry;
using System.Globalization;

namespace insideAirbnb.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListingsController : ControllerBase
    {
        private IListingsRepository _listingRepository { get; }

        public ListingsController(IListingsRepository listingsRepository)
        {
            _listingRepository = listingsRepository;
        }

        [HttpGet]
        public async Task<List<Listings>> GetAllListings()
        {
            return await _listingRepository.getAllListings();
        }

        [HttpGet("id/{id:int}")]
        public async Task <IActionResult> GetById(int id)
        {
            var listing = await _listingRepository.getById(id);
            if (listing == null) return NotFound();
            return Ok(listing);
        }

        [HttpGet("summarized")]
        public async Task<List<ListingsSummarized>> GetAllSummarizedListings()
        {
            return await _listingRepository.getSummarizedListings();
        }

        [HttpGet("geojson")]
        public async Task<FeatureCollection> GetGeoJSON()
        {
            var listings = await _listingRepository.getSummarizedListings();
            List<Feature> features = new();
            FeatureCollection featureCollection = new(features);

            foreach (var listing in listings)
            {
                features.Add(new Feature(new Point(new Position(listing.Latitude, listing.Longitude)), new { listing.Id, listing.Name, listing.Price, listing.HostName }));
            }

            return featureCollection;
        }
    }
}
