using insideAirbnb.Shared;
using StackExchange.Redis;
using System.Text.Json;

namespace insideAirbnb.Server.Cache
{
    public class Cache : ICache
    {
        private readonly IDatabase _cache;
        private const string listingsKey = "_listings";
        private const int expire = 30;

        public Cache(IConnectionMultiplexer redis)
        {
            _cache = redis.GetDatabase();
        }

        public List<Listings> getListingsCache()
        {
            var listings = _cache.StringGet(listingsKey);

            return JsonSerializer.Deserialize<List<Listings>>(listings);
        }

        public bool ListingCacheExists()
        {
            return _cache.KeyExists(listingsKey);
        }

        public void setListingsCache(List<Listings> listings)
        {
            _cache.StringSet(listingsKey, JsonSerializer.Serialize(listings));
            _cache.KeyExpire(listingsKey, new TimeSpan(0, expire, 0));
        }
    }
}
