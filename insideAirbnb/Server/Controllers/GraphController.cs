using insideAirbnb.Server.Repositories;
using insideAirbnb.Server.Repositories.interfaces;
using insideAirbnb.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Controllers
{
//    [Authorize(Roles = "administrator")]
    [ApiController]
    [Route("[controller]")]
    public class GraphController : ControllerBase
    {
        private INeighbourhoodsRepository _neighbourhoodsRepository { get; }
        private IListingsRepository _listingsRepository { get; }
        private IReviewRepository _reviewRepository { get; }
        private ICalendarRepository _calendarRepository { get; }

        public GraphController(INeighbourhoodsRepository neighbourhoodsRepository, IListingsRepository listingsRepository, IReviewRepository reviewRepository, ICalendarRepository calendarRepository)
        {
            _neighbourhoodsRepository = neighbourhoodsRepository;
            _listingsRepository = listingsRepository;
            _reviewRepository = reviewRepository;
            _calendarRepository = calendarRepository;
        }

        [HttpGet("neighbourhoods")]
        public async Task<GraphNeighbourhoods> GetNeighbourhoodStats()
        {
            List<Neighbourhoods> neighbourhoods = await _neighbourhoodsRepository.GetNeighbourhoods();
            List<int> prices = new List<int>();
            List<string> formattedNeighbourhoods = new List<string>();

            foreach (var neighbourhood in neighbourhoods)
            {
                prices.Add(await _listingsRepository.GetAveragePriceByNeighbourhood(neighbourhood.Neighbourhood));
                formattedNeighbourhoods.Add(neighbourhood.Neighbourhood);
            }

            return new GraphNeighbourhoods(prices, formattedNeighbourhoods);
        }

        [HttpGet("property-types")]
        public async Task<GraphProperties> GetPropertyTypesStats()
        {
            var result = await _listingsRepository.GetAmountPropertyTypes();

            return result;
        }

        [HttpGet("room-types")]
        public async Task<GraphRooms> GetRoomTypesStats()
        {
            var result = await _listingsRepository.GetAmountRoomTypes();

            return result;
        }

        [HttpGet("reviews")]
        public async Task<GraphReviews> GetReviewsPerDateStats()
        {
            var result = await _reviewRepository.GetReviewsPerDate();

            return result;
        }
    }
}
