using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMEAngularAsp.Models
{
    public class ExposureProxyLL
    {

        public int ExposureID { get; set; }

        public DateTime BeginTime { get; set; }

        public DateTime EndTime { get; set; }

        public int UserID { get; set; }
        public int PlaceID { get; set; }

        public virtual Place Place { get; set; }
        public virtual User User { get; set; }

        public ExposureProxyLL(int exposureID, DateTime beginTime, DateTime endTime, int userID, int placeID)
        {

            ExposureID = exposureID;
            BeginTime = beginTime;
            EndTime = endTime;
            UserID = userID;
            PlaceID = placeID;


        }
    }
}
