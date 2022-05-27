using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace insideAirbnb.Shared
{
    public class GraphRooms
    {
        public List<string> RoomTypes { get; set; }
        public List<int> Counts { get; set; }
        public GraphRooms(List<string> roomTypes, List<int> counts)
        {
            RoomTypes = roomTypes;
            Counts = counts;
        }
        public record RoomRecord(string RoomType, int count)
        {
            public override string ToString()
            {
                return $"{{ RoomType = {RoomType}, Count = {count} }}";
            }
        }
    }
}
