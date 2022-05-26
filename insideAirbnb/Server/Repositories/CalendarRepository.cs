using insideAirbnb.Server.Repositories.interfaces;
using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;
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
    }
}
