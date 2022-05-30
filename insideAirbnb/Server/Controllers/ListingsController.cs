using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;
using GeoJSON.Net.Feature;
using GeoJSON.Net.Geometry;
using System.Globalization;
using insideAirbnb.Server.Helpers;
using insideAirbnb.Server.Repositories.interfaces;
using insideAirbnb.Server.Cache;

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
        [Cached(600)]
        public async Task<List<Listings>> getAll()
        {
            return await _listingRepository.getAllListings();
        }

        [HttpGet("id/{id:int}")]
        [Cached(600)]
        public async Task <IActionResult> GetById(int id)
        {
            var listing = await _listingRepository.getById(id);
            if (listing == null) return NotFound();
            return Ok(listing);
        }

        [HttpGet("geojson")]
        [Cached(600)]
        public async Task<FeatureCollection> GetGeoJSON()
        {
            List<Geo> listings = await _listingRepository.GetGeoJSONListings();
            return ConvertToGeoJSON.Convert(listings);
        }

        [HttpGet("geojson/filter")]
        [Cached(600)]
        public async Task<FeatureCollection> GetGEOJsonFilter([FromQuery] FilterParameters parameters)
        {            
            List<Geo> listings = await _listingRepository.GetGeoJSONListingsByNeighbourhood(parameters);
            return ConvertToGeoJSON.Convert(listings);
        }
    }
}
