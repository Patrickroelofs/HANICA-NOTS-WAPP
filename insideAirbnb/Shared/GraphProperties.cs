using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace insideAirbnb.Shared
{
    public class GraphProperties
    {
        public List<string> PropertyTypes { get; set; }
        public List<int> Counts { get; set; }
        public GraphProperties(List<string> propertyTypes, List<int> counts)
        {
            PropertyTypes = propertyTypes;
            Counts = counts;
        }
        public record PropertyRecord(string PropertyType, int count)
        {
            public override string ToString()
            {
                return $"{{ PropertyType = {PropertyType}, Count = {count} }}";
            }
        }
    }
}
