using insideAirbnb.Shared;

namespace insideAirbnb.Server.Cache
{
    public interface ICache
    {
        bool ListingCacheExists();
        void setListingsCache(List<Listings> listings);
        List<Listings> getListingsCache();
    }
}
