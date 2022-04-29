using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class neighbourhoodsController : ControllerBase
    {
        public static List<Neighbourhoods> neighbourhoods = new List<Neighbourhoods> { 
            new Neighbourhoods { Neighbourhood = "Bijlmer-Centrum", NeighbourhoodGroup = null },
            new Neighbourhoods { Neighbourhood = "Bijlmer-Oost", NeighbourhoodGroup = null },
            new Neighbourhoods { Neighbourhood = "Bos en Lommer", NeighbourhoodGroup = null },
            new Neighbourhoods { Neighbourhood = "Buitenveldert - Zuidas", NeighbourhoodGroup = null }
        };

        [HttpGet]
        public async Task<ActionResult<List<Neighbourhoods>>> GetNeighbourhoods()
        {
            return Ok(neighbourhoods);
        }
    }
}
