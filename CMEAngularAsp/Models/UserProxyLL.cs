using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Proxies;
namespace CMEAngularAsp.Models
{
    public class UserProxyLL
    {
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public  virtual ICollection<CheckIn> CheckIns { get; }
        public virtual ICollection<Exposure> Exposures { get; }
        public UserProxyLL(int userID, string firstName, string lastName, string phoneNumber) {

            UserID = userID;
            FirstName = firstName;
            LastName = lastName;
            PhoneNumber = phoneNumber;
        }

    }
}
