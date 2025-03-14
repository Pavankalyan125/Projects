using Microsoft.EntityFrameworkCore;
using ProductInventoryAPI.Models; // Ensure this matches your namespace

namespace ProductInventoryAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}