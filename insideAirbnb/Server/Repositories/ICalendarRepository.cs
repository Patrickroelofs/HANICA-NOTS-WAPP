using insideAirbnb.Shared;

namespace insideAirbnb.Server.Repositories
{
    public interface ICalendarRepository
    {
        Task<int> GetMonthlyStays(int id);
        Task<IEnumerable<Availability>> GetListingAvailability(int id);
    }
}
