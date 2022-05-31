using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;
using insideAirbnb.Server.Repositories.interfaces;
using insideAirbnb.Server.Cache;

namespace insideAirbnb.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NeighbourhoodsController : ControllerBase
    {
        private readonly INeighbourhoodsRepository _neighbourhoodsRepository;

        public NeighbourhoodsController(INeighbourhoodsRepository neighbourhoodsRepository)
        {
            _neighbourhoodsRepository = neighbourhoodsRepository;
        }

        [HttpGet]
        [Cached(600)]
        public async Task<List<Neighbourhoods>> get()
        {
            return await _neighbourhoodsRepository.GetNeighbourhoods();
        }

        [HttpGet("geojson")]
        [Cached(600)]
        public ActionResult<dynamic> getGeoJSON()
        {
            var bytes = System.IO.File.ReadAllBytes("/neighbourhoods.geojson");

            return File(bytes, "application/json", "neighbourhoods");
        }
    }
}
