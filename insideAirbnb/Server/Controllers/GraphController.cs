using insideAirbnb.Server.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace insideAirbnb.Server.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("[controller]")]
    public class GraphController : ControllerBase
    {
        private IGraphRepository _graphRepository { get; }

        public GraphController(IGraphRepository graphRepository)
        {
            _graphRepository = graphRepository;
        }

        [HttpGet]
        public IActionResult test()
        {
            return Ok("Hello World");
        }
    }
}
