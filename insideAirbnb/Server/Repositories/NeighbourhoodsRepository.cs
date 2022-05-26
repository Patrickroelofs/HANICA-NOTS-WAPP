using insideAirbnb.Server.Repositories.interfaces;
using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace insideAirbnb.Server.Repositories
{
    public class NeighbourhoodsRepository : INeighbourhoodsRepository
    {
        private readonly insideAirbnbContext _context;

        public NeighbourhoodsRepository(insideAirbnbContext context)
        {
            _context = context;
        }

        public async Task<List<Neighbourhoods>> GetNeighbourhoods()
        {
            List<Neighbourhoods> list = await Task.Run(() => _context.Neighbourhoods
            .Select(n => new Neighbourhoods { Neighbourhood = n.Neighbourhood }).AsNoTracking().ToListAsync());

            return list;
        }
    }
}
