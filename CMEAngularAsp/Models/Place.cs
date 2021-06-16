using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace CMEAngularAsp.Models
{
    public class Place
    {
        private ICollection<UserCME> users;
        public int ID { get; set; }
        public double Lat { get; set; }
        public double Long { get; set; }
        public double Radius { get; set; }

        public string Title { get; set; }

        public Place() { }

    }
}
