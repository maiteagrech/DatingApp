using Microsoft.EntityFrameworkCore;
using dating_app_api.Entities;
using System.Threading.Tasks;
using System;

namespace dating_app_api.Data
{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        internal Task<bool> AnyAsync()
        {
            throw new NotImplementedException();
        }

        public DbSet<AppUser> Users { get; set; } 
    }
}