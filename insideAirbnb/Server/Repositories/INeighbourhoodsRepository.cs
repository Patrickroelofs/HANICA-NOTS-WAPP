using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Repositories
{
    public interface INeighbourhoodsRepository
    {
        Task<List<Neighbourhoods>> GetNeighbourhoods();
    }
}
