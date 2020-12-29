using System.ComponentModel.DataAnnotations;

namespace dating_app_api.DTOs
{
    public class LoginDTO
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }

    }
}