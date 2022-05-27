using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace insideAirbnb.Shared
{
    public class GraphReviews
    {
        public List<DateTime> Dates { get; set; }
        public List<int> Counts { get; set; }
        
        public GraphReviews(List<DateTime> dates, List<int> counts)
        {
            Dates = dates;
            Counts = counts;
        }
        public record ReviewRecord(DateTime? Date, int count)
        {
            public override string ToString()
            {
                return $"{{ Date = {Date}, Count = {count} }}";
            }
        }
    }
}
