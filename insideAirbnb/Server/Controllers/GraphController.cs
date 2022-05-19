using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GraphController : ControllerBase
    {
        private IGraphRepository _graphRepository { get;  } _listingRepository { get; }

        public GraphController(IGraphRepository graphRepository)
        {
            _graphRepository = graphRepository;
        }
    }
}
