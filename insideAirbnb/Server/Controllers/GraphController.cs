using insideAirbnb.Server.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Controllers
{
    [Authorize(Roles = "administrator")]
    [ApiController]
    [Route("[controller]")]
    public class GraphController : ControllerBase
    {
        [HttpGet]
        public IActionResult get()
        {
            return Ok("Hello World");
        }
    }
}
