using insideAirbnb.Server.Repositories.interfaces;
using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Repositories
{
    public class GraphRepository : IGraphRepository
    {
        private readonly insideAirbnbContext _context;

        public GraphRepository(insideAirbnbContext context)
        {
            _context = context;
        }
    }
}
