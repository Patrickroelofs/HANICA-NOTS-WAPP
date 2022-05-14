﻿using insideAirbnb.Shared;
using insideAirbnb.Server.Repositories;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<List<Neighbourhoods>> get()
        {
            return await _neighbourhoodsRepository.GetNeighbourhoods();
        }

        [HttpGet("geojson")]
        public async Task<ActionResult<dynamic>> getGeoJSON()
        {
            var bytes = System.IO.File.ReadAllBytes(@"neighbourhoods.geojson");

            return File(bytes, "application/json", "neighbourhoods");
        }
    }
}
