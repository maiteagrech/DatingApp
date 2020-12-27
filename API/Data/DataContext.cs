using Microsoft.EntityFrameworkCore;
using dating_app_api.Entities;
namespace dating_app_api.Data
{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<AppUser> Users { get; set; } 
    }
}