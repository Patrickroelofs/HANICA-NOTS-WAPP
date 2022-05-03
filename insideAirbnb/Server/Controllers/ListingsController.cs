using insideAirbnb.Server.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListingsController : ControllerBase
    {
        private IListingsRepository _listingRepository { get; }

        public ListingsController(IListingsRepository listingsRepository)
        {
            _listingRepository = listingsRepository;
        }

        [HttpGet]
        public async Task<List<ListingsSummarized>> Get()
        {
            return await _listingRepository.getListings();
        }
    }
}
