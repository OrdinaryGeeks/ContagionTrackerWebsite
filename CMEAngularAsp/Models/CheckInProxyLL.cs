using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMEAngularAsp.Models
{
    public class CheckInProxyLL
    {
        public int CheckInID { get; set; }

        public DateTime BeginTime { get; set; }

        public DateTime EndTime { get; set; }

        public int UserID { get; set; }
        public int PlaceID { get; set; }

        public virtual Place Place { get; set; }
        public virtual User User { get; set; }

        public CheckInProxyLL(int checkInID, DateTime beginTime, DateTime endTime, int userID, int placeID) {

            CheckInID = checkInID;
            BeginTime = beginTime;
            EndTime = endTime;
            UserID = userID;
            PlaceID = placeID;
        }
    }
}
