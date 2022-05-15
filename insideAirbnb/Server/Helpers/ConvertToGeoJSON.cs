using GeoJSON.Net.Feature;
using GeoJSON.Net.Geometry;
using insideAirbnb.Shared;

namespace insideAirbnb.Server.Helpers
{
    public static class ConvertToGeoJSON
    {
        public static FeatureCollection Convert(List<Geo> listings)
        {
            List<Feature> features = new();
            FeatureCollection featureCollection = new(features);

            foreach (Geo listing in listings)
            {
                features.Add(new Feature(new Point(new Position(listing.Latitude, listing.Longitude)), new { listing.Id, listing.Name, listing.Price, listing.HostName }));
            }

            return featureCollection;
        }
    }
}
