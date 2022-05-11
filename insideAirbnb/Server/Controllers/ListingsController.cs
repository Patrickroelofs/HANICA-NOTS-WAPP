﻿using insideAirbnb.Shared;
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
                listing.Latitude = Double.Parse(listing.Latitude.ToString().Insert(2, "."), CultureInfo.InvariantCulture);
                listing.Longitude = Double.Parse(listing.Longitude.ToString().Insert(1, "."), CultureInfo.InvariantCulture);

                features.Add(new Feature(new Point(new Position(listing.Latitude, listing.Longitude)), new { listing.Id }));
            }

            return featureCollection;
        }
    }
}
