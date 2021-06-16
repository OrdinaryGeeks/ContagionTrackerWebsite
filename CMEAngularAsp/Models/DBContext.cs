using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CMEAngularAsp.Models;

namespace CMEAngularAsp.Models
{
    public class DBContext : DbContext
    {

        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {


        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

          //  modelBuilder.Entity<CheckIn>().HasKey()
        }

        public DbSet<CMEAngularAsp.Models.CheckIn> CheckIn { get; set; }

        public DbSet<CMEAngularAsp.Models.Exposure> Exposure { get; set; }

        public DbSet<CMEAngularAsp.Models.Place> Place { get; set; }

        public DbSet<CMEAngularAsp.Models.UserCME> UserCME { get; set; }
    }
}