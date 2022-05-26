using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace insideAirbnb.Shared
{
    public class GraphNeighbourhoods
    {
        public List<int> Prices { get; set; }
        public List<string> Neighbourhoods { get; set; }
        
        public GraphNeighbourhoods(List<int> prices, List<string> neighbourhoods)
        {
            Prices = prices;
            Neighbourhoods = neighbourhoods;
        }


    }
}
