using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMEAngularAsp.Models
{
    public class PlaceProxyLL
    {
        private  ICollection<User> users { get; set; }
        public virtual ICollection<User> Users { get; } = new List<User>();
        public int PlaceID { get; set; }
        public double Lat { get; set; }
        public double Long { get; set; }
        public double Radius { get; set; }

        public string Title { get; set; }

        public PlaceProxyLL(int placeID, double lat, double longitude, double radius, string title) {
            Title = title;
            PlaceID = placeID;
            Lat = lat;
            Long = longitude;
            Radius = radius;

        }


    }
}
