using Microsoft.AspNetCore.Identity;

namespace WebProjectPlatform.Models
{
    public class Reviews
    {
        public string Text { get; set; }
        public IdentityUser Creator { get; set; }
        public double Rating { get; set; }
    }
}