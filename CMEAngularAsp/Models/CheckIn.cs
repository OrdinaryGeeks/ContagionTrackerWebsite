using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace CMEAngularAsp.Models
{
    public class CheckIn
    {
        public CheckIn
            ()
        { }
        public int ID { get; set; }
        public DateTime BeginTime { get; set; }

        public DateTime EndTime { get; set; }


        public int PlaceID { get; set; }
        public int UserCMEID { get; set; }

       
    }
}
