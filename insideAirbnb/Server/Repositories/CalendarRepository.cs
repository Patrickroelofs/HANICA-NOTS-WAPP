using insideAirbnb.Shared;
using Microsoft.EntityFrameworkCore;

namespace insideAirbnb.Server.Repositories
{
    public class CalendarRepository : ICalendarRepository
    {
        private readonly insideAirbnbContext _context;

        public CalendarRepository(insideAirbnbContext context)
        {
            _context = context;
        }

        public Task<IEnumerable<Availability>> GetListingAvailability(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> GetMonthlyStays(int id)
        {
            throw new NotImplementedException();
        }
    }
}
