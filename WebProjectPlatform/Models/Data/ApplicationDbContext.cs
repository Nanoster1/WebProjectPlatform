using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WebProjectPlatform.Models.Data
{
    public class ApplicationDbContext: IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
            
        }
        
        public DbSet<Project> Projects { get; set; }
        public DbSet<Platform> Platforms { get; set; }
        public DbSet<Language> Languages { get; set; }
    }
}