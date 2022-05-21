using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Repositories.interfaces
{
    public interface INeighbourhoodsRepository
    {
        Task<List<Neighbourhoods>> GetNeighbourhoods();
    }
}
