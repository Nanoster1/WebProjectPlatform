using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace WebProjectPlatform.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Rating { get; set; }
        public string LongDescription { get; set; }
        public string ShortDescription { get; set; }
        public string PreviewImg { get; set; }
        public string Link { get; set; }
        public List<string> Screenshots { get; set; }
        public List<Platform> Platforms { get; set; }
        public List<ProgLang> ProgLangs { get; set; }
        public List<Language> Languages { get; set; }
        public List<string> Tags { get; set; }
        public IdentityUser Creator { get; set; }
    }
}